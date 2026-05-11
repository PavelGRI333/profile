from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.models import ContactMessage
from profile_app.core.schemas import ContactMessageCreate


async def create_contact_message(
        session: AsyncSession,
        message_create: ContactMessageCreate,
) -> dict[str, str]:
    message = ContactMessage(**message_create.model_dump())
    session.add(message)
    await session.commit()
    await session.refresh(message)
    return {
        "status": "success",
        "created_at": message.created_at,
        "message": "Заявка успешно отправленна, свяжусь с вами как можно скорее",
    }