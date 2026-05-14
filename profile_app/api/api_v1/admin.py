from typing import Annotated

from pathlib import Path

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Query,
)

from fastapi.responses import HTMLResponse

from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.schemas import (
    PaginatedResponse,
    ContactMessageRead,
    ContactMessageUpdate
)

from profile_app.core.models import ContactMessage

from profile_app.core.models import db_helper

from profile_app.crud import contacts as crud_contacts

from profile_app.utils import verify_admin

BASE_DIR = Path(__file__).parent.parent.parent.parent

router = APIRouter(
    tags=["admin"],
    dependencies=[Depends(verify_admin)],
)

page_router = APIRouter(
    prefix="/admin",
    tags=["admin-pages"],
    dependencies=[Depends(verify_admin)],
)

@router.get('', response_model=PaginatedResponse)
async def get_contacts_messages(
        session: Annotated[
            AsyncSession,
            Depends(db_helper.session_getter),
        ],
        page: int = Query(1, ge=1, description="Номер страницы"),
        size: int = Query(10, ge=1, le=100, description="Записей на странице"),
) -> dict:
    """ Get all contacts messages paginated"""

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

#
@router.delete("/{message_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_contact_message(
    message_id: int,
    session: AsyncSession = Depends(db_helper.session_getter),
) -> None:
    """Delete task by id"""
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
) -> ContactMessage:
    """
        Update status is_read in task by id
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

@page_router.get("", response_class=HTMLResponse)
async def serve_admin():
    """Страница админки"""
    admin_path = BASE_DIR / "templates" / "admin" / "index.html"
    if admin_path.exists():
        with open(admin_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        return HTMLResponse(content=html_content)
    return HTMLResponse(content="admin/index.html not found", status_code=404)

