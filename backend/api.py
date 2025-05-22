from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from model import load_model, predict

app = FastAPI()
# model = load_model("checkpoints/model.pt")

origins = [
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

@app.post("/predict")
async def get_prediction(request: Request):
    data = await request.json()
    prediction = predict(model, data)
    # prediction = "Middleware is working!"
    return {"prediction": prediction}

@app.get("/")
def root():
    return {"message": "Welcome to the Pokemon TCG Move Predictor API"}