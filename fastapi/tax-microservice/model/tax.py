from bson import ObjectId
from pydantic import BaseModel, Field

from .py_object_id import PyObjectId
from .regions import Region


class TaxModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: Region = Field(...)
    value: float = Field(...)
    quantity: int = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
