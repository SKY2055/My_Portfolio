from fastapi import APIRouter
from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/education", tags=["Education"])


@router.get("/")
async def get_education():
    return load_json_data("education.json")