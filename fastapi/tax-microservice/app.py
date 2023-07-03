import asyncio
import logging
import os

import uvicorn
from dotenv import load_dotenv

from fastapi import FastAPI

from .route.routes import router
from .service.kafka_consumer_service import KafkaConsumerService
from .service.tax_service import TaxService

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
    app.state.kafka_consumer_service = KafkaConsumerService(
        app, loop, app.state.config.get('KAFKA_BOOTSTRAP_SERVERS'))
    app.state.tax_service = TaxService(app, app.state.kafka_consumer_service)


if __name__ == '__main__':
    uvicorn.run('app.app:app',
                host=app.state.config.get('APP_HOST'),
                port=int(app.state.config.get('APP_PORT')),
                reload=True
                )
