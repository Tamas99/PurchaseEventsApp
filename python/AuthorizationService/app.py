import asyncio
import os

import requests
import uvicorn
from aiokafka import AIOKafkaProducer, AIOKafkaConsumer
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import RedirectResponse

load_dotenv()
config = os.environ
app = FastAPI()
loop = None
producer = None
consumer = None


@app.on_event("startup")
async def startup_event():
    print('Startup...')
    global loop
    loop = asyncio.get_running_loop()
    loop.create_task(listen_for_incoming_messages())
    global producer
    producer = AIOKafkaProducer(
        loop=loop, bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'))
    await producer.start()


@app.on_event("shutdown")
async def shutdown_event():
    global producer
    await producer.stop()
    global consumer
    await consumer.stop()


async def listen_for_incoming_messages():
    global loop
    global consumer
    consumer = AIOKafkaConsumer(
        config.get('TOPIC_USER_REQUEST'), bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'), loop=loop)
    await consumer.start()
    print('Listening for messages...')
    try:
        async for msg in consumer:
            print('Recieved kafka message:', msg)
            access_token = msg.value.decode()
            await get_user_data(access_token)
    except Exception as e:
        raise Exception(e)
    finally:
        await consumer.stop()


async def send_access_token(message: str):
    global producer
    await producer.send(config.get('TOPIC_ACCESS_TOKEN'), bytes(message, 'utf-8'))


async def send_user_data(username: str):
    global producer
    await producer.send(config.get('TOPIC_USER_RESPONSE'), bytes(username, 'utf-8'))


@app.get('/login/github')
async def login():
    return RedirectResponse(url=f'{config.get("GITHUB_AUTHORIZE_URL")}?client_id={config.get("client_id")}')


@app.get('/callback')
async def auth(code: str):
    print('Getting token')
    try:
        params = {
            'client_id': config.get('client_id'),
            'client_secret': config.get('client_secret'),
            'code': code
        }
        headers = {'Accept': 'application/json'}
        response = requests.post(
            url=config.get('GITHUB_ACCESS_TOKEN_URL'), params=params, headers=headers)
        response_json = response.json()
        access_token = response_json['access_token']
    except Exception as e:
        raise Exception(e)
    if access_token:
        print('Sending token:', access_token)
        await send_access_token(message=access_token)
        print('Kafka message sent.')
    return {'Token:', access_token}


async def get_user_data(access_token: str):
    headers = {'Accept': 'application/json'}
    headers.update({'Authorization': f'Bearer {access_token}'})
    response = requests.get(config.get('GITHUB_API_USER_URL'), headers=headers)
    print('User data:', response.json())
    await send_user_data(response.json()['login'])


@app.get('/home')
async def home():
    return {'message': 'hello world'}


if __name__ == '__main__':
    uvicorn.run("app:app",
                host=config.get('APP_HOST'),
                port=int(config.get('APP_PORT')),
                reload=True
                )
