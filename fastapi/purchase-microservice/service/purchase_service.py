import logging
from typing import List

import requests
from pymongo.results import InsertOneResult

from fastapi import FastAPI

from ..model.purchase_event import PurchaseEventModel
from ..repository.purchase_repository import PurchaseRepository

logger = logging.getLogger(__name__)


class PurchaseService:
    def __init__(self, app: FastAPI):
        self.purchase_repository: PurchaseRepository = PurchaseRepository(app)
        self._tax_microservice_url: str = app.state.config['TAX_MICROSERVICE_URL']

    async def _save(self, purchase_event: PurchaseEventModel) -> PurchaseEventModel:
        return await self.purchase_repository.save(purchase_event)

    async def _get_tax_value(self, region: str) -> float:
        return requests.get(url=self._tax_microservice_url + '/tax/' + region).json()

    async def _calculate_full_price(self, house_price: float, tax: float) -> float:
        return house_price + (house_price * tax)/100

    async def process_event(self, purchase_event: PurchaseEventModel) -> PurchaseEventModel:
        tax_value: float = await self._get_tax_value(purchase_event['region'])
        fullPrice: float = await self._calculate_full_price(float(purchase_event['price']), tax_value)
        purchase_event['price'] = fullPrice
        saved_purchase_event: InsertOneResult = await self._save(purchase_event)
        logger.info('Saved purchase event: ' +
                    str(saved_purchase_event.inserted_id))
        return purchase_event

    async def get_all(self) -> List[PurchaseEventModel]:
        return await self.purchase_repository.find_all()

    async def delete_all(self) -> None:
        await self.purchase_repository.delete_all()
