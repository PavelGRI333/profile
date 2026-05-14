import httpx
from profile_app.core.config import settings

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials

import secrets

security = HTTPBasic()

async def verify_admin(
    credentials: HTTPBasicCredentials = Depends(security)
):

    correct_username = secrets.compare_digest(
        credentials.username,
        settings.security.admin_login
    )
    correct_password = secrets.compare_digest(
        credentials.password,
        settings.security.admin_password
    )

    if not (correct_password and correct_username):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username

async def verify_hcaptcha(token: str, client_ip: str = None) -> bool:
    """
    Проверка токена hCaptcha.

    Args:
        token: Токен из формы (h-captcha-response)
        client_ip: IP адрес пользователя (опционально)

    Returns:
        True если проверка пройдена, иначе False
    """
    # Секретный ключ из переменных окружения
    hcaptcha_secret_key = settings.security.key

    async with httpx.AsyncClient() as client:
        payload = {
            "secret": hcaptcha_secret_key,
            "response": token,
        }
        if client_ip:
            payload["remoteip"] = client_ip

        try:
            response = await client.post(
                "https://hcaptcha.com/siteverify",
                data=payload,
                timeout=10.0
            )
            result = response.json()

            if result.get("success"):
                # logger.info(f"hCaptcha проверка пройдена для IP: {client_ip}")
                return True
            else:
                # logger.warning(f"hCaptcha ошибка: {result.get('error-codes')}")
                return False

        except Exception as e:
            # logger.error(f"Ошибка при проверке hCaptcha: {e}")
            return False