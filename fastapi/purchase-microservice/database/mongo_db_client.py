import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient

from fastapi import FastAPI


class MongoDBClient:
    _client: AsyncIOMotorClient = None

    async def connect(self, app: FastAPI):
        self._client: AsyncIOMotorClient = motor.motor_asyncio.AsyncIOMotorClient(
            app.state.config.get("DATABASE_URL"))

    async def close(self):
        await self._client.close()

    async def get_database(self, db_name: str):
        return self._client[db_name]
