from sqlalchemy.orm import Session

from app.database.models import Contact
from app.schemas.contact import ContactResponse


def save_contact(db: Session, message) -> ContactResponse:
    contact = Contact(
        name=message.name,
        email=message.email,
        message=message.message
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)

    return ContactResponse(message="Contact submitted successfully")