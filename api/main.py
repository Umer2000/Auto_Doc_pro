from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-docs")
async def generate_docs(request: Request):
    data = await request.json()
    code = data.get("code", "")
    analysis = data.get("analysis", "")

    if not code or not analysis:
        return JSONResponse({"error": "Missing code or analysis"}, status_code=400)

    documented_code = f'"""\n{analysis.strip()}\n"""\n\n{code.strip()}'
    return {"documented_code": documented_code}
