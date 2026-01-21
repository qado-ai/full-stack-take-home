from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.contracts.router import router as contracts_router


def create_app():
    app = FastAPI(title="qado takehome api", version="0.1.0")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(contracts_router)

    return app


app = create_app()
