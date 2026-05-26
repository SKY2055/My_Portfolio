from fastapi import APIRouter
from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/skills", tags=["Skills"])


@router.get("/")
async def get_skills():
    return load_json_data("skills.json")