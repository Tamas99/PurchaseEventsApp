import asyncio
import logging
import os

import uvicorn
from dotenv import load_dotenv

from fastapi import FastAPI

from .routes.routes import router
from .services.kafka_producer_service import KafkaProducerService
from .services.purchase_service import PurchaseService

load_dotenv()
app = FastAPI()
app.state.config = os.environ

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(router)


@app.on_event("startup")
async def startup_event():
    loop = asyncio.get_running_loop()
    app.state.purchase_service = PurchaseService(app)
    app.state.kafka_producer_service = KafkaProducerService(
        app, loop, app.state.config.get("KAFKA_BOOTSTRAP_SERVERS"))


if __name__ == '__main__':
    uvicorn.run("app.app:app",
                host=app.state.config.get('APP_HOST'),
                port=int(app.state.config.get('APP_PORT')),
                reload=True
                )
