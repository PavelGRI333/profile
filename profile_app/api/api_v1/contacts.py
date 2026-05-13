from typing import Annotated

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    BackgroundTasks,
    Request,
)

from sqlalchemy.ext.asyncio import AsyncSession

from profile_app.core.schemas import (
    ContactMessageCreate,
)

from profile_app.core.models import db_helper

from profile_app.crud import contacts as crud_contacts

from profile_app.utils import send_email_notification_async, verify_hcaptcha


router = APIRouter(tags=["Contacts"])

@router.post("",
             status_code=status.HTTP_201_CREATED,
             )
async def create_message(
        request: Request,
        session: Annotated[
            AsyncSession,
            Depends(db_helper.session_getter),
        ],
        background_tasks: BackgroundTasks,
        message_create: ContactMessageCreate,
) -> dict:
    """ Create a new contact message in DB and send email notification """
    # Captcha
    # 1. Получаем IP пользователя
    client_ip = request.client.host

    # 2. Проверяем hCaptcha
    is_valid = await verify_hcaptcha(
        token=message_create.h_captcha_token,
        client_ip=client_ip
    )

    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Ошибка валидации CAPTCHA. Пожалуйста, попробуйте снова."
        )

    contact = await crud_contacts.create_contact_message(
        session=session,
        message_create=message_create,
    )

    #send email message in background
    background_tasks.add_task(
        send_email_notification_async,
        name=message_create.name,
        email=message_create.email,
        description=message_create.description,
    )

    return contact

