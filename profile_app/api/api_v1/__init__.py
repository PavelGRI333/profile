from fastapi import APIRouter

from profile_app.core.config import settings

router = APIRouter(
    prefix=settings.api.v1.prefix,
)