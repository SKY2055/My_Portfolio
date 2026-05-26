from pydantic import BaseModel, EmailStr, Field


class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)


class ContactResponse(BaseModel):
    message: str