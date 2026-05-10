from .base import Base

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from sqlalchemy import Text, String

from .mixins.int_id_pk import IntIdPkMixin
from .mixins.created_at import CreatedAtMixin


class ContactMessage(IntIdPkMixin, CreatedAtMixin, Base):
    name: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(Text)
    is_read: Mapped[bool] = mapped_column(default=False)