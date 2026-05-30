"""Portfolio API routes"""

from typing import Annotated, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.models import PortfolioItem, db_helper
from profile_app.core.schemas import (
    PortfolioItemCreate,
    PortfolioItemRead,
    PortfolioItemUpdate,
)
from profile_app.crud import portfolio as crud_portfolio
from profile_app.utils import verify_admin

router = APIRouter(tags=["Portfolio"])

# Public routes
@router.get("", response_model=List[PortfolioItemRead])
async def read_portfolio_items(
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)]
) -> List[PortfolioItem]:
    """Get all portfolio items"""
    return await crud_portfolio.get_all_portfolio_items(session)

# Admin routes (protected)
@router.post("", response_model=PortfolioItemRead, status_code=status.HTTP_201_CREATED,
          dependencies=[Depends(verify_admin)])
async def create_portfolio(
    item_in: PortfolioItemCreate,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> PortfolioItem:
    return await crud_portfolio.create_portfolio_item(session, item_in)

@router.put("/{item_id}", response_model=PortfolioItemRead,
          dependencies=[Depends(verify_admin)])
async def update_portfolio(
    item_id: int,
    item_in: PortfolioItemUpdate,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> PortfolioItem:
    item = await crud_portfolio.update_portfolio_item(session, item_id, item_in)
    if not item:
        raise HTTPException(status_code=404, detail="Portfolio item not found")
    return item

@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT,
            dependencies=[Depends(verify_admin)])
async def delete_portfolio(
    item_id: int,
    session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
) -> None:
    success = await crud_portfolio.delete_portfolio_item(session, item_id)
    if not success:
        raise HTTPException(status_code=404, detail="Portfolio item not found")
    return None
