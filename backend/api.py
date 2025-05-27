from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
from backend.preprocessing import extract_card_features

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the Pokemon TCG Move Predictor API"}

@app.post("/predict")
async def predict_rarity(request: Request):
    # TODO: Load model and return dummy prediction
    return {"rarity": "Dummy Rarity"}
