from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

# Allow frontend to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Load Trae agent config
with open("trae/code_analyzer.agent.json", "r", encoding="utf-8") as f:
    agent_config = json.load(f)

@app.get("/")
def home():
    return {"message": "AutoDoc Pro backend is running."}

@app.post("/api/analyze/")
async def analyze_code(request: Request):
    data = await request.json()
    code = data.get("code", "")

    # For demonstration: just echo code and agent info
    return {
        "summary": "This is a placeholder. The agent would analyze this code.",
        "code": code,
        "agent_name": agent_config.get("name", "N/A")
    }
