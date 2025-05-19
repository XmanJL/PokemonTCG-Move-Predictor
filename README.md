# Pokémon TCG Opponent Move Predictor

## Run App

Run backend:

```
uvicorn backend.api:app --reload
```

Open `frontend/index.html` to interact.

## Project Architecture

## Workflow

```
User Input (game state JSON) → Frontend → Backend API → Model → Prediction → Frontend Display
```

| Component          | Input               | Output                   |
| ------------------ | ------------------- | ------------------------ |
| `index.html` / JS  | JSON game state     | Predicted move displayed |
| `api.py`           | JSON → Python dict  | JSON prediction          |
| `preprocessing.py` | Raw game state dict | Vector (model input)     |
| `model.py`         | Encoded tensor      | Predicted move (label)   |

---

## 1. Frontend (HTML/JS)

### `index.html`

- Textarea for user input (game state JSON)
- Button to send data to backend
- Paragraph to display prediction

### `app.js`

Input:

```js
const gameState = document.getElementById("gameState").value;
```

- Raw JSON string entered by user

Output:

```js
const response = await fetch("http://localhost:8000/predict", { ... });
document.getElementById("result").innerText = "Predicted Move: " + data.prediction;
```

- Sends JSON to backend and displays predicted move

---

## 2. Backend (FastAPI)

### `api.py`

```python
@app.post("/predict")
async def get_prediction(request: Request):
    data = await request.json()
    prediction = predict(model, data)
    return {"prediction": prediction}
```

#### Input (from frontend)

```json
{
  "state": { "player_hp": 60, "active_card": "Pikachu" },
  "action": "Attack",
  "next_state": { "opponent_hp": 30 }
}
```

#### Output (to frontend)

```json
{
  "prediction": "Thunderbolt"
}
```

---

## 3. Model (PyTorch)

### `model.py`

```python
class MovePredictor(nn.Module):
    def forward(self, x):
        out, _ = self.lstm(x)
        return self.fc(out[:, -1, :])
```

- Input: Tensor `[batch_size, sequence_length, input_size]`
- Output: Predicted label from logits

### `predict()` Function

```python
def predict(model, input_data):
    return "opponent_move"
```

---

## 4. Data Preprocessing

### `preprocessing.py`

```python
def encode_game_state(state):
    return [0] * 128
```

- Converts game state dict to vector for model input

---
