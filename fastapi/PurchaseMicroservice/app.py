import asyncio
import os
from statistics import mean
from typing import List, Optional

import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import requests
import uvicorn
from aiokafka import AIOKafkaConsumer, AIOKafkaProducer
from aiokafka.errors import KafkaError, KafkaTimeoutError
from bson import ObjectId
from dotenv import load_dotenv
from fastapi import Body, FastAPI, HTTPException, Request, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel, Field
import json

load_dotenv()
config = os.environ
app = FastAPI()
loop = None
producer = None
consumer = None

client: AsyncIOMotorClient = motor.motor_asyncio.AsyncIOMotorClient(config["DATABASE_URL"])
db = client.purchases

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


class PurchaseModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    index: str = Field(...)
    name: str = Field(...)
    gender: str = Field(...)
    email: str = Field(...)
    phone: str = Field(...)
    dateOfBirth: str = Field(...)
    houseNumber: str = Field(...)
    price: str = Field(...)
    sqFt: str = Field(...)
    bedrooms: str = Field(...)
    bathrooms: str = Field(...)
    pole: str = Field(...)


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "index": "1"
            }
        }

def serializer(value):
    return json.dumps(value).encode()


@app.on_event("startup")
async def startup_event():
    global loop
    loop = asyncio.get_running_loop()
    global producer
    producer = AIOKafkaProducer(
        loop=loop, bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'), value_serializer=serializer)
    await producer.start()


@app.on_event("shutdown")
async def shutdown_event():
    global producer
    await producer.stop()

@app.get('/hello')
async def hello_world():
    return {'result': 'Hello World!'}


@app.post('/purchase', response_description="Save purchase event", response_model=PurchaseModel)
async def create_purchase_event(purchase: PurchaseModel = Body(...)):
    purchase = jsonable_encoder(purchase)
    purchase = await calculate_price_with_tax(purchase) 
    await send_to_kafka(purchase)
    new_purchase = await db["purchases"].insert_one(purchase)
    created_purchase = await db["purchases"].find_one({"_id": new_purchase.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_purchase)

async def calculate_price_with_tax(purchase: dict):
    current_tax: Response = requests.get(url=config['TAX_CALCULATOR_URL'] + '/tax/' + purchase['pole'])
    current_tax: float = current_tax.json()
    house_price = float(purchase['price']) + (float(purchase['price']) * current_tax)/100
    purchase['price'] = str(house_price)
    return purchase

async def send_to_kafka(purchase):
    try:
        global producer
        send_future = await producer.send(config['TOPIC_PURCHASE_EVENT'], purchase)
        await send_future  #  wait until message is produced
    except KafkaTimeoutError:
        print("produce timeout... maybe we want to resend data again?")
    except KafkaError as err:
        print("some kafka error on produce: {}".format(err))

    
@app.get(
    "/get", response_description="List all purchases", response_model=List[PurchaseModel]
)
async def list_purchase_events():
    purchases = await db["purchases"].find().to_list(1000)
    return purchases

@app.delete("/", response_description="Delete all purchases")
async def delete_purchases():
    delete_result = await db["purchases"].delete_many({})

    if delete_result.deleted_count >= 1:
        return JSONResponse(content="Purchases deleted.", status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"No purchase is found in collection.")


if __name__ == '__main__':
    uvicorn.run("app:app",
                host=config.get('APP_HOST'),
                port=int(config.get('APP_PORT')),
                reload=True
                )
