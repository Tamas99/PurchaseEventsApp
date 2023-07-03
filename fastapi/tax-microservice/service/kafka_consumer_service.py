import asyncio
import logging

from aiokafka import AIOKafkaConsumer

from fastapi import FastAPI

from .deserializer import deserializer

logger = logging.getLogger(__name__)


class KafkaConsumerService:
    def __init__(self, app: FastAPI, loop: asyncio.AbstractEventLoop, kafka_bootstrap_servers: str) -> None:
        self.consumer = AIOKafkaConsumer(
            'purchase_events',
            loop=loop,
            bootstrap_servers=kafka_bootstrap_servers,
            value_deserializer=deserializer
        )
        self.listeners = []
        self.loop = loop
        app.add_event_handler('startup', self.start)
        app.add_event_handler('startup', self.create_listener_task)
        app.add_event_handler('shutdown', self.stop)

    async def start(self):
        logger.info('Starting consumer...')
        await self.consumer.start()

    async def stop(self):
        logger.info('Stopping consumer...')
        await self.consumer.stop()

    def subscribe(self, listener):
        logger.info('Service subscribed: ' + str(listener))
        self.listeners.append(listener)

    async def dispatch(self, event):
        for listener in self.listeners:
            await listener(event)

    def create_listener_task(self):
        self.loop.create_task(self.listen())

    async def listen(self):
        try:
            logger.info('Listening...')
            async for msg in self.consumer:
                logger.info('Recieved kafka message: ' + str(msg))
                purchase_event = msg.value
                await self.dispatch(purchase_event)
        except Exception as e:
            logger.error('Exception occurred: ' + str(e))
