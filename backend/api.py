from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
from backend.preprocessing import extract_card_features

app = FastAPI(
    title="Pokemon TCG Card Rarity Predictor API",
    description="API for predicting Pokemon TCG Card rarity",
    version="0.1.0"
)

origins = [
    "http://localhost:5500",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the Pokemon TCG Card Rarity Predictor API"}

@app.post("/predict")
async def predict_rarity(request: Request):
    # TODO: Load model and return dummy prediction
    return {"rarity": "Dummy Rarity"}
