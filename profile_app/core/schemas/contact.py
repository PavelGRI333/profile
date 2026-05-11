from pydantic import BaseModel
from pydantic import EmailStr


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    description: str
