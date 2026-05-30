"""Pydantic schemas for PortfolioItem"""

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field


class PortfolioItemBase(BaseModel):
    title: str
    category: str
    description: str
    image_url: str
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    tech_stack: List[str]
    order: int = 0

    class Config:
        populate_by_name = True


class PortfolioItemCreate(PortfolioItemBase):
    pass


class PortfolioItemRead(PortfolioItemBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class PortfolioItemUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    tech_stack: Optional[List[str]] = None
    order: Optional[int] = None

    class Config:
        populate_by_name = True
