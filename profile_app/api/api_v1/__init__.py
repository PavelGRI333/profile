from fastapi import APIRouter

from profile_app.core.config import settings

from .contacts import router as contacts_router

router = APIRouter(
    prefix=settings.api.v1.prefix,
)

router.include_router(
    contacts_router,
    prefix=settings.api.v1.contacts,
)