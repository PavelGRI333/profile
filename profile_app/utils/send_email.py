from email.message import EmailMessage
from datetime import datetime
import aiosmtplib

from profile_app.core.config import settings


async def send_email_notification_async(name: str, email: str, description: str) -> None:
    """Асинхронная отправка email через aiosmtplib"""
    msg = EmailMessage()
    msg['Subject'] = f"🔔 Новая заявка от {name}"
    msg['From'] = settings.email.login
    msg['To'] = settings.email.sendto

    # Формируем тело письма
    current_time = datetime.now().strftime("%d.%m.%Y %H:%M:%S")
    body = f"""
    Новая заявка с сайта

    👤 Имя: {name}
    📧 Email: {email}
    📝 Сообщение: {description}
    🕐 Время: {current_time}

    ---
    Ответьте клиенту на его email: {email}
    """
    msg.set_content(body)

    # Асинхронная отправка
    await aiosmtplib.send(
        msg,
        hostname="smtp.mail.ru",
        port=465,
        username=settings.email.login,
        password=settings.email.password,
        use_tls=True,
    )