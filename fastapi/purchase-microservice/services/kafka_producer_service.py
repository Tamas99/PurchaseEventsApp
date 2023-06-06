import asyncio

from aiokafka import AIOKafkaProducer
from aiokafka.errors import KafkaError, KafkaTimeoutError

from fastapi import FastAPI

from ..model.purchase_event import PurchaseEventModel
from .serializer import serializer


class KafkaProducerService:
    def __init__(self, app: FastAPI):
        self.loop = asyncio.get_running_loop()
        self.producer = AIOKafkaProducer(
            loop=self.loop,
            bootstrap_servers=app.state.config.get('KAFKA_BOOTSTRAP_SERVERS'),
            value_serializer=serializer
        )
        app.add_event_handler('startup', self.start())
        app.add_event_handler('shutdown', self.stop())

    async def start(self):
        await self.producer.start()

    async def stop(self):
        await self.producer.stop()

    async def send_purchase(self, purchase_event: PurchaseEventModel):
        try:
            await self.producer.send('purchase_events', purchase_event)
        except KafkaTimeoutError:
            print("produce timeout... maybe we want to resend data again?")
        except KafkaError as err:
            print("some kafka error on produce: {}".format(err))
