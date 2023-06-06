from typing import List

import requests

from fastapi import FastAPI

from ..model.purchase_event import PurchaseEventModel
from ..repository.purchase_repository import PurchaseRepository


class PurchaseService:
    def __init__(self, app: FastAPI):
        self.purchase_repository: PurchaseRepository = PurchaseRepository(app)
        self.tax_microservice_url: str = app.state.config['TAX_MICROSERVICE_URL']

    async def _save(self, purchase_event: PurchaseEventModel) -> PurchaseEventModel:
        return self.purchase_repository.save(purchase_event)

    async def _get_tax_value(self, region: str) -> float:
        return requests.get(url=self.tax_microservice_url + '/tax/' + region).json()

    async def _calculate_full_price(self, house_price: float, tax: float) -> float:
        return house_price + (house_price * tax)/100

    async def register(self, purchase_event: PurchaseEventModel) -> PurchaseEventModel:
        tax_value: float = await self._get_tax_value(purchase_event['region'])
        fullPrice: float = await self._calculate_full_price(float(purchase_event['price']), tax_value)
        purchase_event['price'] = fullPrice
        return await self._save(purchase_event)

    async def get_all(self) -> List[PurchaseEventModel]:
        return await self.purchase_repository.find_all()

    async def delete_all(self) -> None:
        await self.purchase_repository.delete_all()
