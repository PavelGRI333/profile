from contextlib import asynccontextmanager
from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse

from core.config import settings

from api import router as api_router

from api.api_v1.admin import page_router as admin_page_router

from core.models import db_helper

BASE_DIR = Path(__file__).parent.parent

@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup
    yield
    # shutdown
    await db_helper.dispose()

main_app = FastAPI(
    lifespan=lifespan,
    title='Portfolio',
)

main_app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "*",  # для разработки
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

static_path = BASE_DIR / "static"
print(f"Static path: {static_path}")
print(f"Static exists: {static_path.exists()}")

if static_path.exists():
    main_app.mount("/static", StaticFiles(directory=str(static_path)), name="static")

main_app.include_router(
    api_router,
    prefix=settings.api.prefix,
)

main_app.include_router(admin_page_router)

@main_app.get("/", response_class=HTMLResponse)
async def serve_index():
    """Главная страница"""
    index_path = BASE_DIR / "templates" / "index.html"
    if index_path.exists():
        # Читаем файл и возвращаем как HTML
        with open(index_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        return HTMLResponse(content=html_content)
    return HTMLResponse(content="index.html not found", status_code=404)

if __name__ == "__main__":
    uvicorn.run(
        "main:main_app",
        host=settings.run.host,
        port=settings.run.port,
        reload=True,
    )