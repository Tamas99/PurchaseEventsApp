import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient


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
