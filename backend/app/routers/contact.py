from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.contact import ContactMessage, ContactResponse
from app.database.database import get_db
from app.services.contact_service import save_contact

router = APIRouter(prefix="/api/v1/contact", tags=["Contact"])


@router.post("/", response_model=ContactResponse)
async def submit_contact(
    message: ContactMessage,
    db: Session = Depends(get_db)
):
    return save_contact(db, message)