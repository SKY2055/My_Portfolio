from fastapi import APIRouter

from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/certifications", tags=["Certifications"])


@router.get("/")
async def get_certifications():
    return load_json_data("certifications.json")
