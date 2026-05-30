"""SQLAlchemy model for portfolio items"""

from .base import Base
from sqlalchemy.orm import Mapped, mapped_column
from typing import Optional
from sqlalchemy import String, Text, Integer, JSON, DateTime, func

from .mixins.int_id_pk import IntIdPkMixin
from .mixins.created_at import CreatedAtMixin


class PortfolioItem(IntIdPkMixin, CreatedAtMixin, Base):
    """Portfolio item model.

    Fields:
        title (unique), category, description (Markdown/Text), image_url,
        demo_url (optional), github_url (optional), tech_stack (JSON array),
        order (int), created_at, updated_at.
    """
    title: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    category: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=False)
    demo_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    github_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    tech_stack: Mapped[list] = mapped_column(JSON, nullable=False, default=list)
    order: Mapped[int] = mapped_column(Integer, default=0)
    updated_at: Mapped[DateTime] = mapped_column(
        DateTime,
        default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )
