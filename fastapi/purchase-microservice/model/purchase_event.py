from bson import ObjectId
from py_object_id import PyObjectId
from pydantic import BaseModel, Field


class PurchaseEventModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    index: str = Field(...)
    name: str = Field(...)
    gender: str = Field(...)
    email: str = Field(...)
    phone: str = Field(...)
    dateOfBirth: str = Field(...)
    houseNumber: str = Field(...)
    price: str = Field(...)
    sqFt: str = Field(...)
    bedrooms: str = Field(...)
    bathrooms: str = Field(...)
    region: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "index": "1"
            }
        }
