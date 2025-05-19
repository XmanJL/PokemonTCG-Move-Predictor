from fastapi import FastAPI, Request
from model import load_model, predict

app = FastAPI()
model = load_model("checkpoints/model.pt")

@app.post("/predict")
async def get_prediction(request: Request):
    data = await request.json()
    prediction = predict(model, data)
    return {"prediction": prediction}
