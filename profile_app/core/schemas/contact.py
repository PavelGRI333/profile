from pydantic import BaseModel
from pydantic import EmailStr, Field
from pydantic import ConfigDict

from datetime import datetime

class ContactMessageCreate(BaseModel):
    """Create contact message schema"""
    name: str
    email: EmailStr
    description: str
    h_captcha_token: str = Field(..., alias="h-captcha-response")

    class Config:
        populate_by_name = True

class ContactMessageRead(BaseModel):
    """Read tasks from DB schema"""
    id: int
    name: str
    email: EmailStr
    description: str
    created_at: datetime
    is_read: bool

    model_config = ConfigDict(
        from_attributes=True,
    )

class ContactMessageUpdate(BaseModel):
    """Update contact message schema"""
    is_read: bool

class PaginatedResponse(BaseModel):
    """Paginated response schema"""
    items: list[ContactMessageRead]
    total: int
    page: int
    size: int
    pages: int
