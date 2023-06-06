from typing import List

from motor.motor_asyncio import AsyncIOMotorDatabase

from fastapi import FastAPI

from ..database.mongo_db_client import MongoDBClient
from ..model.purchase_event import PurchaseEventModel


class PurchaseRepository:
    def __init__(self, app: FastAPI):
        self.db_client = MongoDBClient(app.state.config.get("DATABASE_URL"))
        app.add_event_handler('startup', self.db_client.connect)
        app.add_event_handler('shutdown', self.db_client.close)

    async def save(self, purchase_event: PurchaseEventModel) -> PurchaseEventModel:
        db: AsyncIOMotorDatabase = self.db_client.get_database('purchases')
        return await db['purchases'].insert_one(purchase_event)

    async def find_all(self) -> List[PurchaseEventModel]:
        db: AsyncIOMotorDatabase = self.db_client.get_database('purchases')
        return await db['purchases'].find().to_list(1000)

    async def delete_all(self) -> None:
        db: AsyncIOMotorDatabase = self.db_client.get_database('purchases')
        await db['purchases'].delete_many({})
