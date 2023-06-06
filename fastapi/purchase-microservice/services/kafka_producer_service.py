import asyncio

from aiokafka import AIOKafkaProducer
from aiokafka.errors import KafkaError, KafkaTimeoutError

from fastapi import FastAPI

from ..app import logger
from ..model.purchase_event import PurchaseEventModel
from .serializer import serializer


class KafkaProducerService:
    def __init__(self, app: FastAPI, loop: asyncio.AbstractEventLoop, kafka_bootstrap_servers: str):
        self.producer = AIOKafkaProducer(
            loop=loop,
            bootstrap_servers=kafka_bootstrap_servers,
            value_serializer=serializer
        )
        app.add_event_handler('startup', self.start)
        app.add_event_handler('shutdown', self.stop)

    async def start(self):
        await self.producer.start()

    async def stop(self):
        await self.producer.stop()

    async def send_purchase(self, purchase_event: PurchaseEventModel):
        try:
            await self.producer.send('purchase_events', purchase_event)
        except KafkaTimeoutError:
            logger.error("Produce timeout... maybe we want to resend data again?")
        except KafkaError as err:
            logger.error("Some Kafka error on produce: {}".format(err))
