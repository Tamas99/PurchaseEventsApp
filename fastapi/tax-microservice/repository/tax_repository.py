from typing import List

from motor.motor_asyncio import AsyncIOMotorDatabase
from pymongo.results import UpdateResult

from fastapi import FastAPI

from ..database.mongo_db_client import MongoDBClient
from ..model.tax import TaxModel


class TaxRepository:
    def __init__(self, app: FastAPI):
        self.db_client = MongoDBClient(app.state.config.get("DATABASE_URL"))
        app.add_event_handler('startup', self.db_client.connect)
        app.add_event_handler('startup', self.db_client.init_db)
        app.add_event_handler('shutdown', self.db_client.close)

    async def find_one_by_region(self, region: str) -> TaxModel:
        db: AsyncIOMotorDatabase = self.db_client.get_database('taxes')
        return await db["taxes"].find_one({"name": region})

    async def find_all(self) -> List[TaxModel]:
        db: AsyncIOMotorDatabase = self.db_client.get_database('taxes')
        return await db['taxes'].find().to_list(1000)

    async def update_one(self, region: str, tax: dict) -> UpdateResult:
        db: AsyncIOMotorDatabase = self.db_client.get_database('taxes')
        return await db["taxes"].update_one({"name": region}, {"$set": tax})

    async def delete_all(self) -> None:
        db: AsyncIOMotorDatabase = self.db_client.get_database('taxes')
        await db['taxes'].delete_many({})
