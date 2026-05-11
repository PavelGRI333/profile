import smtplib
from email.message import EmailMessage

from profile_app.core.config import settings

def send_email_message(subject: str, body: str) -> None:
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = settings.email.login
    msg['To'] = settings.email.sendto
    msg.set_content(body)

    # logger.info("Начинаю отправку email уведомления")

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as smtp:
        smtp.login(settings.email.login, settings.email.password)
        smtp.send_message(msg)

    # logger.info("Email уведомление успешно отправлено")