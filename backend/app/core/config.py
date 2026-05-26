import os

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    APP_NAME: str = "Portfolio API"
    DEBUG: bool = True
    DATABASE_URL: str = "sqlite:///./portfolio.db"

    class Config:
        env_file = ".env"

    @property
    def allowed_origins(self) -> List[str]:
        cors_env = os.environ.get("CORS_ORIGINS")
        if cors_env:
            return [o.strip() for o in cors_env.split(",")]
        return [
            "http://127.0.0.1:8000",
            "http://localhost:8000",
            "http://127.0.0.1:5500",
            "http://localhost:5500",
            "http://127.0.0.1:3000",
            "http://localhost:3000",
        ]


settings = Settings()