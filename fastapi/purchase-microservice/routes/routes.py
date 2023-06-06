from typing import List

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from fastapi import APIRouter, Body, Request, status

from ..model.purchase_event import PurchaseEventModel

router = APIRouter()


@router.post('/purchase', response_description="Save purchase event", response_model=PurchaseEventModel)
async def create(request: Request, purchase_event: PurchaseEventModel = Body(...)):
    purchase_event: PurchaseEventModel = jsonable_encoder(purchase_event)
    registered_purchase_event: PurchaseEventModel = await request.app.state.purchase_service.register(purchase_event)
    await request.app.state.kafka_producer_service.send_purchase(registered_purchase_event)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=registered_purchase_event)


@router.get(
    "/get", response_description="List all purchases", response_model=List[PurchaseEventModel]
)
async def read_all(request: Request):
    purchase_events: List[PurchaseEventModel] = await request.app.state.purchase_service.get_all()
    return JSONResponse(status_code=status.HTTP_200_OK, content=purchase_events)


@router.delete("/", response_description="Delete all purchases")
async def delete_all(request: Request):
    await request.app.state.purchase_service.delete_all()
    return JSONResponse(content="Purchases deleted.", status_code=status.HTTP_204_NO_CONTENT)
