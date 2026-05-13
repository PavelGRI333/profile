from typing import Sequence

from sqlalchemy.ext.asyncio import AsyncSession

from sqlalchemy import select, func

from profile_app.core.models import ContactMessage
from profile_app.core.schemas import ContactMessageCreate


async def create_contact_message(
        session: AsyncSession,
        message_create: ContactMessageCreate,
) -> dict:
    """ CRUD operation create contact message """
    create_data = message_create.model_dump(exclude={'h_captcha_token'})
    message = ContactMessage(**create_data)
    session.add(message)
    await session.commit()
    await session.refresh(message)
    return {
        "status": "success",
        "created_at": message.created_at,
        "message": "Заявка успешно отправленна, свяжусь с вами как можно скорее",
    }

async def read_all_contact_messages(
        session: AsyncSession,
        page: int = 1,
        size: int = 10,
) -> tuple[Sequence[ContactMessage], int, int]:
    """
        Read tasks from DB paginated
    """
    # 1. Считаем общее количество записей
    total = await session.scalar(select(func.count()).select_from(ContactMessage))
    total = total or 0

    # 2. Вычисляем offset и общее количество страниц
    offset = (page - 1) * size
    total_pages = (total + size - 1) // size if total > 0 else 0

    # 3. Получаем записи для текущей страницы
    stmt = (
        select(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .offset(offset)
        .limit(size)
    )
    result = await session.scalars(stmt)
    messages = result.all()

    return messages, total, total_pages

async def delete_contact_message(
    session: AsyncSession,
    message_id: int,
) -> bool:
    """Delete task by ID"""
    message = await session.get(ContactMessage, message_id)
    if not message:
        return False
    await session.delete(message)
    await session.commit()
    return True


async def update_contact_message_status(
        session: AsyncSession,
        message_id: int,
        is_read: bool,
) -> ContactMessage | None:
    """
        Update status is_read
    """
    message = await session.get(ContactMessage, message_id)
    if not message:
        return None

    message.is_read = is_read
    await session.commit()
    await session.refresh(message)
    return message