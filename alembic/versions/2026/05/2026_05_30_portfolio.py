"""portfolio table migration

Revision ID: c1d2e3f4g5h6
Revises: b23f8214ea37
Create Date: 2026-05-30 12:00:00.000000
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = "c1d2e3f4g5h6"
down_revision: Union[str, Sequence[str], None] = "b23f8214ea37"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema – create portfolio_items table."""
    op.create_table(
        "portfolio_items",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("category", sa.String(length=255), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("image_url", sa.String(length=500), nullable=False),
        sa.Column("demo_url", sa.String(length=500), nullable=True),
        sa.Column("github_url", sa.String(length=500), nullable=True),
        sa.Column("tech_stack", postgresql.JSON(), nullable=False),
        sa.Column("order", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False),
        sa.Column("updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False),
        sa.PrimaryKeyConstraint("id", name=op.f("pk_portfolio_items")),
        sa.UniqueConstraint("title", name=op.f("uq_portfolio_items_title")),
    )
    # Create index on order for ordering if needed
    op.create_index(op.f("ix_portfolio_items_order"), "portfolio_items", ["order"], unique=False)


def downgrade() -> None:
    """Downgrade schema – drop portfolio_items table."""
    op.drop_index(op.f("ix_portfolio_items_order"), table_name="portfolio_items")
    op.drop_table("portfolio_items")
