import logging
from typing import List

from fastapi.encoders import jsonable_encoder
from pymongo.results import UpdateResult

from fastapi import FastAPI

from ..model.tax import TaxModel
from ..repository.tax_repository import TaxRepository
from .kafka_consumer_service import KafkaConsumerService

logger = logging.getLogger(__name__)


class TaxService:
    def __init__(self, app: FastAPI, kafka_consumer_service: KafkaConsumerService):
        self.tax_repository: TaxRepository = TaxRepository(app)
        kafka_consumer_service.subscribe(self.handleEvent)

    async def get_one(self, region: str) -> float:
        tax: TaxModel = await self.tax_repository.find_one_by_region(region)
        return tax['value']

    async def get_all(self) -> List[TaxModel]:
        return await self.tax_repository.find_all()

    async def update_one(self, region: str, tax_to_update: dict) -> UpdateResult:
        return await self.tax_repository.update_one(region, tax_to_update)

    async def delete_all(self) -> None:
        await self.tax_repository.delete_all()

    async def handleEvent(self, purchase_event) -> None:
        taxes: list[TaxModel] = await self.tax_repository.find_all()
        taxes = jsonable_encoder(taxes)
        target_tax: TaxModel = [
            tax for tax in taxes if tax['name'] == purchase_event['region']][0]
        target_tax = jsonable_encoder(target_tax)
        remaining_taxes: List[TaxModel] = [
            tax for tax in taxes if tax != target_tax]
        new_tax_value: float = (target_tax['value'] + target_tax['quantity']) / (remaining_taxes[0]['value'] + remaining_taxes[1]['value'] + remaining_taxes[2]['value'] + (
            remaining_taxes[0]['quantity'] + remaining_taxes[1]['quantity'] + remaining_taxes[2]['quantity'])/3)
        target_tax['value'] += new_tax_value
        target_tax['quantity'] += 1
        updated_tax: UpdateResult = await self.update_one(target_tax['name'], {'value': target_tax['value'], 'quantity': target_tax['quantity']})
        logger.info('Updated: ' + str(updated_tax.acknowledged))
