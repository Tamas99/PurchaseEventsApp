import asyncio
import logging
import os

import uvicorn
from dotenv import load_dotenv

from fastapi import FastAPI

from .route.routes import router
from .service.kafka_producer_service import KafkaProducerService
from .service.purchase_service import PurchaseService

# Set up logging
logging.basicConfig(level=logging.INFO)

# Load env variables
load_dotenv()

# Create app
app = FastAPI()
app.state.config = os.environ

app.include_router(router)


@app.on_event('startup')
async def startup_event():
    loop = asyncio.get_running_loop()
    app.state.purchase_service = PurchaseService(app)
    app.state.kafka_producer_service = KafkaProducerService(
        app, loop, app.state.config.get('KAFKA_BOOTSTRAP_SERVERS'))


if __name__ == '__main__':
    uvicorn.run('app.app:app',
                host=app.state.config.get('APP_HOST'),
                port=int(app.state.config.get('APP_PORT')),
                reload=True
                )
