from fastapi import APIRouter

from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/profile", tags=["Profile"])


@router.get("/")
async def get_profile():
    return load_json_data("profile.json")