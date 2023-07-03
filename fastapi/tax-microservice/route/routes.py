from typing import List

from fastapi.responses import JSONResponse

from fastapi import APIRouter, Request, status

from ..model.tax import TaxModel

router = APIRouter()


@router.get('/tax/{region}')
async def get_one(request: Request, region: str):
    return await request.app.state.tax_service.get_one(region)


@router.get(
    "/tax", response_description="List all taxes", response_model=List[TaxModel]
)
async def get_all(request: Request):
    return await request.app.state.tax_service.get_all()


@router.delete("/tax", response_description="Delete all taxes")
async def delete_all(request: Request):
    await request.app.state.tax_service.delete_all()
    return JSONResponse(content="Taxes deleted.", status_code=status.HTTP_204_NO_CONTENT)
