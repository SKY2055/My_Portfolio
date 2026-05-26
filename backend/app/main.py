import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.core.config import settings
from app.core.logger import setup_logger
from app.database.init_db import init_db

from app.routers import (
    profile,
    skills,
    projects,
    education,
    experience,
    certifications,
    contact
)

# Setup logging
logger = setup_logger()

# Create DB tables
init_db()

app = FastAPI(
    title="Portfolio API",
    version="1.0.0",
    description="Professional Portfolio Backend API"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(profile.router)
app.include_router(skills.router)
app.include_router(projects.router)
app.include_router(education.router)
app.include_router(experience.router)
app.include_router(certifications.router)
app.include_router(contact.router)

# Serve frontend static files
frontend_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "..", "frontend")
app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dir, "assets")), name="assets")
app.mount("/css", StaticFiles(directory=os.path.join(frontend_dir, "css")), name="css")
app.mount("/js", StaticFiles(directory=os.path.join(frontend_dir, "js")), name="js")


@app.get("/")
async def serve_frontend():
    return FileResponse(os.path.join(frontend_dir, "index.html"))