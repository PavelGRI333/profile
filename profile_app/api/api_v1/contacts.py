from typing import Annotated

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)

from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.schemas import (
    ContactMessageCreate,
)

from profile_app.core.models import db_helper

from profile_app.crud import contacts as crud_contacts


router = APIRouter(tags=["Contacts"])

@router.post("")
async def create_message(
        session: Annotated[
            AsyncSession,
            Depends(db_helper.session_getter),
        ],
        message_create: ContactMessageCreate,
):
    contact = await crud_contacts.create_contact_message(
        session=session,
        message_create=message_create,
    )
    return contact