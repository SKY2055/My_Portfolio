from fastapi import APIRouter
from app.services.portfolio_service import load_json_data

router = APIRouter(prefix="/api/v1/projects", tags=["Projects"])


@router.get("/")
async def get_projects():
    return load_json_data("projects.json")