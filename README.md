# AI/ML Developer Portfolio

A full-stack portfolio website with FastAPI backend and dynamic frontend.

## Features

- 🚀 Dynamic project loading from FastAPI backend
- 📧 Contact form with server-side handling
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Modern UI with smooth animations
- 🔒 Form validation and error handling

## Tech Stack

**Backend:**
- FastAPI (Python)
- Pydantic for data validation
- CORS middleware for frontend communication

**Frontend:**
- HTML5/CSS3 with CSS Grid/Flexbox
- Vanilla JavaScript (ES6+)
- Fetch API for asynchronous requests

## Installation

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-project
```

2. Create and activate a Python virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the backend server from the `backend` directory:
```bash
cd backend
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

5. Open the site in your browser:
```bash
http://127.0.0.1:8000
```

> Important: Do not serve the frontend separately with `python -m http.server`. The FastAPI backend already serves the static frontend assets and API from the same origin.

## Project Structure

```
backend/
├── app/
│   ├── core/          # Configuration and logging
│   ├── data/          # JSON data files (profile, skills, projects, etc.)
│   ├── database/      # SQLAlchemy models and database initialization
│   ├── routers/       # API endpoint definitions
│   ├── schemas/       # Pydantic models for request/response validation
│   ├── services/      # Business logic for data loading
│   ├── utils/         # Utility functions
│   └── main.py        # FastAPI application entry point
frontend/
├── index.html         # Main HTML file
├── js/                # JavaScript files (API calls, rendering, app logic)
├── css/               # Stylesheets
└── assets/            # Images and icons
```

## API Endpoints

- `GET /api/v1/profile/` - Get profile information
- `GET /api/v1/skills/` - Get skills data
- `GET /api/v1/projects/` - Get projects data
- `GET /api/v1/education/` - Get education data
- `GET /api/v1/experience/` - Get experience data
- `GET /api/v1/certifications/` - Get certifications data
- `POST /api/v1/contact/` - Submit contact form

## Environment Variables

Create a `.env` file in the `backend` directory if needed:

```
DATABASE_URL=sqlite:///./portfolio.db
DEBUG=True
```

## Viewing Contact Messages

Contact form submissions are stored in the SQLite database. To view them:

1. Navigate to the backend directory:
```bash
cd backend
```

2. Query the database:
```bash
# Basic query
sqlite3 portfolio.db "SELECT * FROM contacts;"

# Formatted output with headers
sqlite3 portfolio.db ".mode column" ".headers on" "SELECT * FROM contacts;"

# Pretty-printed JSON
sqlite3 portfolio.db "SELECT json_object('id', id, 'name', name, 'email', email, 'message', message) FROM contacts;" | python3 -m json.tool
```

3. To view specific contact:
```bash
sqlite3 portfolio.db "SELECT * FROM contacts WHERE id = 1;"
```

## Contributing

Feel free to fork this repository and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

