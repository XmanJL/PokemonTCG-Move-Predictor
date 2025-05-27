# Pokémon TCG Rarity Predictor

## Overview
A web app that predicts the **rarity** of a Pokémon card using deep learning. Input card features, and the model returns one of: `Common`, `Uncommon`, `Rare`, etc.

## Software Architecture
![image](https://github.com/user-attachments/assets/3902b82e-61c3-4a2b-81f3-0d678b7e96ae)


## Tech Stack

| Component   | Tech               |
|-------------|--------------------|
| Frontend    | HTML, CSS, JS      |
| Backend     | FastAPI (Python)   |
| Model       | TensorFlow / Keras |
| Deployment  | Vercel + Render    |

---

## Run App Instruction

### 1. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 2. Run backend server

```bash
uvicorn backend.api:app --reload
```

### 3. Launch frontend

Open `frontend/index.html` in a browser.

---

## Example Card Input

```json
{
  "name": "Charizard",
  "hp": 150,
  "types": ["Fire"],
  "supertype": "Pokémon",
  "subtypes": ["Stage 2"],
  "convertedRetreatCost": 3,
  "generation": "Base",
  "abilities": [{"name": "Energy Burn"}],
  "attacks": [{"name": "Fire Spin", "damage": "100"}]
}
```

Returns:

```json
{
  "rarity": "Rare Holo"
}
```

---
