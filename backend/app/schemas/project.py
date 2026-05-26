from pydantic import BaseModel


class Project(BaseModel):
    title: str
    description: str
    github: str
    demo: str | None = None