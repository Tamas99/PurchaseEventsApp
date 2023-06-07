import logging

import motor.motor_asyncio
from fastapi.encoders import jsonable_encoder
from motor.motor_asyncio import AsyncIOMotorClient

from ..model.regions import Region
from ..model.tax import TaxModel

logger = logging.getLogger(__name__)


class MongoDBClient:
    def __init__(self, database_url: str):
        self._client: AsyncIOMotorClient = None
        self._database_url = database_url

    async def connect(self):
        self._client: AsyncIOMotorClient = motor.motor_asyncio.AsyncIOMotorClient(
            self._database_url)

    async def close(self):
        await self._client.close()

    def get_database(self, db_name: str):
        return self._client[db_name]

    async def init_db(self):
        db = self.get_database('taxes')
        if (await db["taxes"].find().to_list(1000)) != []:
            return
        for region in list(Region):
            tax: TaxModel = TaxModel(name=region, value=10, quantity=0)
            tax = jsonable_encoder(tax)
            await db["taxes"].insert_one(tax)
        logger.info('Taxes collection seeded')
