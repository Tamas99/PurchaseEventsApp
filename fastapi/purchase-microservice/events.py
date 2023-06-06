import os

from dotenv import load_dotenv

from .app import app
from .services.kafka_producer_service import KafkaProducerService
from .services.purchase_service import PurchaseService


@app.on_event("startup")
async def startup_event():
    load_dotenv()
    app.state.config = os.environ
    app.state.purchase_service = PurchaseService(app)
    app.state.kafka_producer_service = KafkaProducerService(app)
