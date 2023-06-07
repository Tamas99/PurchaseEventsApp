from bson import ObjectId
from pydantic import BaseModel, Field


class UpdateTaxModel(BaseModel):
    value: float = Field(...)
    quantity: int = Field(...)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
