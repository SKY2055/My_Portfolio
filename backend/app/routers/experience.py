from fastapi import APIRouter

from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/experience", tags=["Experience"])


@router.get("/")
async def get_experience():
    return load_json_data("experience.json")
