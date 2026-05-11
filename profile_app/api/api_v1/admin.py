from typing import Annotated

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Query,
)

from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.schemas import (
    PaginatedResponse,
    ContactMessageRead,
    ContactMessageUpdate
)

from profile_app.core.models import db_helper, ContactMessage

from profile_app.crud import contacts as crud_contacts


router = APIRouter(
    tags=["admin"],
)

@router.get('', response_model=PaginatedResponse)
async def get_contacts_messages(
        session: Annotated[
            AsyncSession,
            Depends(db_helper.session_getter),
        ],
        page: int = Query(1, ge=1, description="Номер страницы"),
        size: int = Query(10, ge=1, le=100, description="Записей на странице"),
):
    messages, total, total_pages = await crud_contacts.read_all_contact_messages(
        session=session,
        page=page,
        size=size,
    )

    return {
        "items": messages,
        "total": total,
        "page": page,
        "size": size,
        "pages": total_pages,
    }

@router.delete("/{message_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_contact_message(
    message_id: int,
    session: AsyncSession = Depends(db_helper.session_getter),
):
    """Удалить заявку по ID."""
    deleted = await crud_contacts.delete_contact_message(session, message_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Заявка не найдена")
    return None

@router.patch(
    '/{message_id}',
    response_model=ContactMessageRead,
    status_code=status.HTTP_200_OK,
)
async def update_contact_message_status(
        message_id: int,
        data: ContactMessageUpdate,
        session: Annotated[AsyncSession, Depends(db_helper.session_getter)],
):
    """
    Обновить статус прочтения заявки.

    - **message_id**: ID заявки
    - **is_read**: true (прочитано) или false (не прочитано)
    """
    message = await crud_contacts.update_contact_message_status(
        session=session,
        message_id=message_id,
        is_read=data.is_read,
    )

    if not message:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заявка не найдена"
        )

    return message