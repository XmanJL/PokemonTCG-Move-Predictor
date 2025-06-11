# Pokémon TCG Rarity Predictor

## Overview

A web app that predicts the **rarity** of a Pokémon card using deep learning. Input card features, and the model returns one of: `Common`, `Uncommon`, `Rare`, etc.
This app is practical for Pokémon market design as it lets the model predict card rarity — a key factor in determining market value.

## Software Architecture

![image](https://github.com/user-attachments/assets/17bf85b4-3b56-479e-82ee-0ee0be4161ee)

## Kaggle Dataset
[Pokemon TCG All Cards 1999 - 2023](https://www.kaggle.com/datasets/adampq/pokemon-tcg-all-cards-1999-2023/data)

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
  "abilities": [{ "name": "Energy Burn" }],
  "attacks": [{ "name": "Fire Spin", "damage": "100" }]
}
```

Returns:

```json
{
  "rarity": "Rare Holo"
}
```

---
