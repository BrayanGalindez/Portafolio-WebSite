from pydantic import BaseModel
from typing import Optional
class Email(BaseModel):
    id: Optional[str]
    name: Optional[str]
    email: str
    message: str
