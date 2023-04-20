import asyncio
import os
from typing import List

import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import uvicorn
from aiokafka import AIOKafkaConsumer, AIOKafkaProducer
from bson import ObjectId
from dotenv import load_dotenv
from fastapi import Body, FastAPI, HTTPException, Request, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel, Field
import json
from poles import Pole

load_dotenv()
config = os.environ
app = FastAPI()
loop = None
producer = None
consumer = None

client: AsyncIOMotorClient = motor.motor_asyncio.AsyncIOMotorClient(config["DATABASE_URL"])
db = client.taxes

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


class TaxModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: Pole = Field(...)
    value: float = Field(...)
    quantity: int = Field(...)


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}



class UpdateTaxModel(BaseModel):
    value: float = Field(...)
    quantity: int = Field(...)


    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


def deserializer(serialized):
    return json.loads(serialized)


@app.on_event("startup")
async def startup_event():
    if (await db["taxes"].find().to_list(1000)) == []:
        await _init_db()
    global loop
    loop = asyncio.get_running_loop()
    loop.create_task(listen_for_incoming_messages())


@app.on_event("shutdown")
async def shutdown_event():
    global consumer
    await consumer.stop()


async def listen_for_incoming_messages():
    print('Setting up KafkaConsumer')
    global loop
    global consumer
    consumer = AIOKafkaConsumer(
        bootstrap_servers=config.get('KAFKA_BOOTSTRAP_SERVERS'), loop=loop, value_deserializer=deserializer)
    consumer.subscribe([config.get('TOPIC_PURCHASE_EVENT')])
    await consumer.start()
    try:
        # data = await consumer.getmany(timeout_ms=10000)
        # for _, messages in data.items():
        #     for message in messages:
        #         purchase = message.value
        #         print(type(purchase), purchase)
        #         await _calculate_new_tax(purchase)
        async for msg in consumer:
            print('Recieved kafka message:', msg)
            purchase = msg.value
            print(type(purchase), purchase)
            await _calculate_new_tax(purchase)
    finally:
        await consumer.stop()


async def _init_db():
    for pole in list(Pole):
        tax: TaxModel = TaxModel(name=pole, value=10, quantity=0)
        tax = jsonable_encoder(tax)
        await db["taxes"].insert_one(tax)

async def _calculate_new_tax(purchase: dict):
    taxes: list[TaxModel] = await list_taxes()
    taxes = jsonable_encoder(taxes)
    target_tax: TaxModel = [tax for tax in taxes if tax['name'] == purchase['pole']][0]
    target_tax = jsonable_encoder(target_tax)
    remaining_taxes = [tax for tax in taxes if tax != target_tax]
    new_tax_value = (target_tax['value'] + target_tax['quantity']) / (remaining_taxes[0]['value'] + remaining_taxes[1]['value'] + remaining_taxes[2]['value'] + (remaining_taxes[0]['quantity'] + remaining_taxes[1]['quantity'] + remaining_taxes[2]['quantity'])/3)
    target_tax['value'] += new_tax_value
    target_tax['quantity'] += 1
    updated_tax = await update_tax(target_tax['name'], UpdateTaxModel(value=target_tax['value'], quantity=target_tax['quantity']))
    print(updated_tax)

@app.get('/hello')
async def hello_world():
    return {'result': 'Hello World!'}

@app.get('/tax/{pole}')
async def get_pole_tax(pole: str):
    if (tax := await db["taxes"].find_one({"name": pole})) is not None:
        return tax['value']

    raise HTTPException(status_code=404, detail=f"Tax with name {pole} is not found")

    
@app.get(
    "/get", response_description="List all taxes", response_model=List[TaxModel]
)
async def list_taxes():
    taxes = await db["taxes"].find().to_list(1000)
    return taxes

@app.put("/tax/{pole}", response_description="Update a tax", response_model=TaxModel)
async def update_tax(pole: str, tax: UpdateTaxModel = Body(...)):
    tax = {k: v for k, v in tax.dict().items() if v is not None}
    update_result = await db["taxes"].update_one({"name": pole}, {"$set": tax})

    if update_result.modified_count == 1:
        if (
            updated_tax := await db["taxes"].find_one({"name": pole})
        ) is not None:
            return updated_tax

    if (existing_tax := await db["taxes"].find_one({"name": pole})) is not None:
        return existing_tax

    raise HTTPException(status_code=404, detail=f"Tax with pole {pole} not found")


@app.delete("/", response_description="Delete all taxes")
async def delete_taxes():
    delete_result = await db["taxes"].delete_many({})

    if delete_result.deleted_count >= 1:
        return JSONResponse(content="Taxes deleted.", status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"No tax is found in collection.")


if __name__ == '__main__':
    uvicorn.run("app:app",
                host=config.get('APP_HOST'),
                port=int(config.get('APP_PORT')),
                reload=True
                )
