"""CRUD operations for PortfolioItem"""

from typing import List, Optional

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete

from profile_app.core.models import PortfolioItem
from profile_app.core.schemas import PortfolioItemCreate, PortfolioItemUpdate


async def create_portfolio_item(
    session: AsyncSession,
    item_in: PortfolioItemCreate,
) -> PortfolioItem:
    """Create a new PortfolioItem"""
    data = item_in.model_dump()
    item = PortfolioItem(**data)
    session.add(item)
    await session.commit()
    await session.refresh(item)
    return item


async def get_all_portfolio_items(
    session: AsyncSession,
) -> List[PortfolioItem]:
    """Return all portfolio items ordered by `order`"""
    stmt = select(PortfolioItem).order_by(PortfolioItem.order)
    result = await session.scalars(stmt)
    return result.all()


async def update_portfolio_item(
    session: AsyncSession,
    item_id: int,
    item_in: PortfolioItemUpdate,
) -> Optional[PortfolioItem]:
    """Update a PortfolioItem by id"""
    stmt = select(PortfolioItem).where(PortfolioItem.id == item_id)
    result = await session.scalar(stmt)
    if not result:
        return None
    update_data = item_in.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(result, key, value)
    await session.commit()
    await session.refresh(result)
    return result


async def delete_portfolio_item(
    session: AsyncSession,
    item_id: int,
) -> bool:
    """Delete a PortfolioItem by id"""
    stmt = delete(PortfolioItem).where(PortfolioItem.id == item_id)
    result = await session.execute(stmt)
    await session.commit()
    return result.rowcount > 0
