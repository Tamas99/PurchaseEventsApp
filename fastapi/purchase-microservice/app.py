import uvicorn

from fastapi import FastAPI

from .events import startup_event
from .routes.routes import router

app = FastAPI()

app.include_router(router)
app.add_event_handler("startup", startup_event)


if __name__ == '__main__':
    uvicorn.run("app:app",
                host=app.state.config.get('APP_HOST'),
                port=int(app.state.config.get('APP_PORT')),
                reload=True
                )
