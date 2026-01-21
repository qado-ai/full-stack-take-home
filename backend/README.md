# Backend Service

This is the Python backend for the Qado Takehome application. It is built with **FastAPI** and uses modern Python tooling for package management, linting, and type checking.

## Tech Stack & Tools

*   **[uv](https://github.com/astral-sh/uv)**: An extremely fast Python package installer and project manager. We use `uv` for:
    *   Creating the virtual environment (`.venv`).
    *   Installing dependencies.
    *   Running scripts in the context of the project.
*   **[FastAPI](https://fastapi.tiangolo.com/)**: The modern web framework for building APIs.
*   **[Pydantic](https://docs.pydantic.dev/)**: Data validation and settings management using Python type hints.
*   **[Ruff](https://docs.astral.sh/ruff/)**: An extremely fast Python linter and formatter.
*   **[basedpyright](https://github.com/detachhead/basedpyright)**: A static type checker for Python (a fork of Pyright).

## Getting Started

### Prerequisites

Ensure you have `uv` installed. If not, install it via:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Installation

Install the project dependencies (including dev dependencies):

```bash
uv sync
```

This commands will verify your `uv.lock` file and sync the environment in `.venv`.

### Running the Server

1.  **Environment Setup**:
    Copy the `.env.example` file to `.env` and add your OpenAI API key:
    ```bash
    cp .env.example .env
    # Edit .env and set OPENAI_API_KEY
    ```

    *   Ideally, we provided you with a key via email.
    *   If you have your own key, or want to use a local proxy, feel free to do so.

2.  **Start the Server**:
    Start the development server with hot-reload enabled:

    ```bash
    uv run fastapi dev src/app.py
    ```

The API will be available at [http://localhost:8000](http://localhost:8000).
Interactive API docs (Swagger UI) are available at [http://localhost:8000/docs](http://localhost:8000/docs).

## Scripts & Commands

### Generating OpenAPI Spec

We follow an API-first approach (or at least, strict contract syncing). The frontend client is generated from the backend's OpenAPI schema.

To re-generate `openapi.json` in the root of the backend folder:

```bash
uv run generate-openapi
```

**Note**: You should run this whenever you change Pydantic models in `schemas.py` or modify endpoint signatures.

## Developer Experience (DX)

We have configured the project with recommended VS Code extensions for a seamless experience.

1.  **Install Recommended Extensions**: When you open this folder in VS Code, you should accept the prompt to install recommended extensions (or look for the `@recommended` filter in the Extensions pane).
    *   This includes **Ruff** for linting/formatting and **Python** tooling.
2.  **Linting & Typing**: The project is set up to auto-format on save and check types strictly. We trust you to handle linting errors as they appear in your editor.

## Project Structure

```
backend/
├── pyproject.toml      # Project configuration & dependencies
├── uv.lock             # Locked dependency versions
├── openapi.json        # Generated API schema (do not edit manually)
├── scripts/            # Helper scripts (e.g., OpenAPI generator)
└── src/
    ├── app.py          # Main application entrypoint
    └── contracts/      # Domain logic for contract analysis
        ├── router.py   # API endpoints
        ├── schemas.py  # Pydantic models (Input/Output definitions)
        └── service.py  # Business logic
```

## How it Integrates with the Frontend

1.  **Contract Definition**: We define our API contract using Pydantic models in `src/contracts/schemas.py`.
2.  **Schema Generation**: We run `uv run generate-openapi` to create `openapi.json`.
3.  **Client Generation**: The Frontend tooling (Orval) reads this JSON file to generate strict TypeScript interfaces and React Query hooks.