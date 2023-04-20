import asyncio
import os
from statistics import mean
from typing import List, Optional

import cities
import motor.motor_asyncio
import redis_cache
import requests
import uvicorn
from aiokafka import AIOKafkaConsumer, AIOKafkaProducer
from bson import ObjectId
from dotenv import load_dotenv
from fastapi import Body, FastAPI, HTTPException, Request, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel, EmailStr, Field
import json

load_dotenv()
config = os.environ
app = FastAPI()
app2 = FastAPI()
loop = None
producer = None
consumer = None

client = motor.motor_asyncio.AsyncIOMotorClient(config["DATABASE_URL"])
db = client.users


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class UserModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    password: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "user",
                "password": "password"
            }
        }


@app.on_event("startup")
async def startup_event():
    global loop
    loop = asyncio.get_running_loop()
    loop.create_task(listen_for_incoming_messages())
    global producer
    producer = AIOKafkaProducer(
        loop=loop, bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'))
    await producer.start()


@app.on_event("shutdown")
async def shutdown_event():
    global consumer
    await consumer.stop()
    global producer
    await producer.stop()


async def listen_for_incoming_messages():
    redis: redis_cache.Redis = redis_cache.RedisCache(
        config.get('REDIS_HOST'), config.get('REDIS_PORT'))
    print('Setting up KafkaConsumer')
    global loop
    global consumer
    consumer = AIOKafkaConsumer(
        bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'), loop=loop)
    consumer.subscribe([config.get('TOPIC_ACCESS_TOKEN'), config.get('TOPIC_USER_RESPONSE')])
    await consumer.start()
    try:
        async for msg in consumer:
            print('Recieved kafka message:', msg)
            if msg.topic == config.get('TOPIC_ACCESS_TOKEN'):
                access_token = msg.value.decode()
                await redis.set(access_token, 1)
            else:
                print('User data recieved:', msg.value.decode())
    finally:
        await consumer.stop()


async def build_up_response(weather_forecast_data: dict):
    date = weather_forecast_data['daily']['time']
    avg_temp = mean(weather_forecast_data['hourly']['temperature_2m'])
    avg_rain = mean(weather_forecast_data['hourly']['rain'])
    avg_snow = mean(weather_forecast_data['hourly']['snowfall'])
    max_temp = weather_forecast_data['daily']['temperature_2m_max']
    min_temp = weather_forecast_data['daily']['temperature_2m_min']
    sunrise = weather_forecast_data['daily']['sunrise']
    sunset = weather_forecast_data['daily']['sunset']
    return {
        'latitude': weather_forecast_data['latitude'],
        'longitude': weather_forecast_data['longitude'],
        'timezone': weather_forecast_data['timezone'],
        'elevation': str(weather_forecast_data['elevation']) + 'm',
        'date': date[0],
        'average_temperature': str(avg_temp) + ' ' + weather_forecast_data['hourly_units']['temperature_2m'],
        'average_rain': str(avg_rain) + ' ' + weather_forecast_data['hourly_units']['rain'],
        'average_snow': str(avg_snow) + ' ' + weather_forecast_data['hourly_units']['snowfall'],
        'max_temperature': max_temp[0],
        'min_temperature': min_temp[0],
        'sunrise': sunrise[0],
        'sunset': sunset[0]
    }


async def use_cache(redis: redis_cache.Redis, params: dict):
    city = params.pop('city')
    cached_response = await redis.json_get(city)
    if not cached_response:
        url = config.get('WEATHER_API_URL') + '?'
        coordinates = cities.Cities[city].value
        url += 'latitude=' + coordinates['latitude'] + '&longitude=' + coordinates['longitude'] + '&'
        for key in params:
            url += key + '=' + params[key] + '&'
        url = url[0:-1]  # cut the last '&' symbol
        try:
            api_response = requests.get(url=url)
            response_json = api_response.json()
            await redis.json_set(city, response_json)
        except Exception as e:
            raise Exception(e)
        return response_json
    print('Returning cached values')
    return cached_response


@app.get('/home')
async def home():
    return {'message': 'hello world'}

async def call_api(params: dict):
    city = params.pop('city')
    url = config.get('WEATHER_API_URL') + '?'
    coordinates = cities.Cities[city].value
    url += 'latitude=' + coordinates['latitude'] + '&longitude=' + coordinates['longitude'] + '&'
    for key in params:
        url += key + '=' + params[key] + '&'
    url = url[0:-1]  # cut the last '&' symbol
    try:
        api_response = requests.get(url=url)
        response_json = api_response.json()
    except Exception as e:
        raise Exception(e)
    return response_json

@app.get('/weather')
async def get_weather_data(request: Request):
    # redis: redis_cache.Redis = redis_cache.RedisCache(
    #     config.get('REDIS_HOST'), config.get('REDIS_PORT'))
    # access_token = request.headers.get('authorization')
    # await check_authorization(access_token, redis)
    # response = await use_cache(redis, dict(request.query_params))
    response = await call_api(dict(request.query_params))
    return response


async def check_authorization(access_token: str, redis: redis_cache.Redis):
    if not access_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Access token is missing."
        )
    print('Getting token from Redis')
    result = await redis.get(access_token)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid access token."
        )


@app.post('/kafka_send')
async def kafka_send_token(request: Request):
    body = await request.body()
    print('Sending kafka message:', body)
    global producer
    await producer.send(config.get('TOPIC_USER_REQUEST'), body)
    return {'result': 'Kafka message sent.'}


# @app.post('/register')
# async def register_user(request: Request):
#     redis: redis_cache.Redis = redis_cache.RedisCache(
#         config.get('REDIS_HOST'), config.get('REDIS_PORT'))
#     body = await request.body()
#     print('Caching user data simulating a registration registration:', body)
#     redis.set(body['username'], body['password'])
#     return {'result': 'Value cached in Redis.'}


# @app.get('/redis_get')
# async def redis_get_if_exists(request: Request):
#     redis: redis_cache.Redis = redis_cache.RedisCache(
#         config.get('REDIS_HOST'), config.get('REDIS_PORT'))
#     body = await request.body()
#     print('The given key is:', body['key'])
#     result = await redis.get(body['key'])
#     if not result:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="The specified key is not found in cache."
#         )
#     return {'result': result}


@app.post("/create", response_description="Add new user", response_model=UserModel)
async def create_user(user: UserModel = Body(...)):
    user = jsonable_encoder(user)
    new_user = await db["users"].insert_one(user)
    created_user = await db["users"].find_one({"_id": new_user.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_user)


@app.get(
    "/get", response_description="List all users", response_model=List[UserModel]
)
async def list_users():
    users = await db["users"].find().to_list(1000)
    return users


@app.get(
    "/get/{id}", response_description="Get a single user", response_model=UserModel
)
async def show_user(id: str):
    if (user := await db["users"].find_one({"_id": id})) is not None:
        return user

    raise HTTPException(status_code=404, detail=f"user {id} not found")


@app2.get('/')
async def func():
    # import requests

    # print('Request recieved')
    # # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    # url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&outputsize=full&apikey=IVNWY4N6H1G2KEUU'
    # r = requests.get(url)
    # data = r.json()
    # timeseries_1min = data['Time Series (1min)']
    # return data
    # daily = data['data']
    # print('Sorting...')
    # sorted_daily = sorted(daily, key=lambda x:x['value'])
    # current_date = sorted_daily
    # return sorted_daily
    
    # daily_currencies = data['Time Series (Digital Currency Daily)']
    # daily_2022 = {date: daily_currencies[date] for date in daily_currencies if '2022' in date}
    # print('Sorting...')
    # sorted_daily = sorted(timeseries_1min.items(), key=lambda x:x[1]['2. high'])
    # sorted_daily = dict(sorted_daily)
    # return sorted_daily
    # print()
    # print('20k High')
    # high_20k = {date: sorted_daily[date] for date in sorted_daily if sorted_daily[date]['2a. high (EUR)'].startswith('20')}
    # print(high_20k)
    # import requests

    # url = "https://big-data-amazon.p.rapidapi.com/search/pc"

    # headers = {
    #     "X-RapidAPI-Key": "fb41bd13e0mshdb60be49684a552p16533ejsnf256f7627f31",
    #     "X-RapidAPI-Host": "big-data-amazon.p.rapidapi.com"
    # }

    # response = requests.request("GET", url, headers=headers)

    # print(response.text)

    with open('daily_16.json', encoding='utf-8') as hourly:
        print('Loading json...')
        data = json.load(hourly)['data']
        print('Sorting...')
        print('1')
        sorted_by_id = sorted(data, key=lambda x:x['city']['name'])
        print('2')
        sorted_by_id = sorted(data, key=lambda x:x['data'][0]['temp'])
        print('3')
        sorted_by_id = sorted(data, key=lambda x:x['city']['id'])
        sorted_by_id = list(sorted_by_id)
        print('Returning...')
        return sorted_by_id
        # print(type(hourly_json))

@app2.get('/mult')
async def matrix_multiplication():
    import numpy as np
    from datetime import datetime
    np.random.seed(27)
    A = np.random.randint(1,1000,size = (1500,2000))
    B = np.random.randint(1,1000,size = (2000,1500))
    print(f"Matrix A:\n {A}\n")
    print(f"Matrix B:\n {B}\n")
    print(datetime.now())
    C = np.matmul(A, B)
    print(datetime.now())
    print(f"Matrix C:\n {C}\n")

@app2.get('/prime/{n}') # 99194853094755497 is good
async def is_prime(n: int):
    import math
    from datetime import datetime
    print(datetime.now())
    for i in range(2,int(math.sqrt(n))+1):
        if (n%i) == 0:
            print(datetime.now())
            return False
    print(datetime.now())
    return True

@app2.get('/fibonacci/{n}')
async def nth_fibonacci(n: int):
    from datetime import datetime
    import sys
    sys.set_int_max_str_digits(1000000)
    a = 0
    b = 1
    
    # Check is n is less
    # than 0
    if n < 0:
        print("Incorrect input")
        
    # Check is n is equal
    # to 0
    elif n == 0:
        return 0
    
    # Check if n is equal to 1
    elif n == 1:
        return b
    else:
        print(datetime.now())
        for i in range(1, n):
            c = a + b
            a = b
            b = c
        print(datetime.now())
        return b


if __name__ == '__main__':
    uvicorn.run("app:app",
                host=config.get('APP_HOST'),
                port=int(config.get('APP_PORT')),
                reload=True
                )
