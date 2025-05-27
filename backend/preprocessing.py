import numpy as np

def extract_card_features(card):
    # Dummy feature vector with 5 elements
    hp = float(card.get("hp", 0))
    retreat = float(card.get("convertedRetreatCost", 0))
    type_fire = 1 if "Fire" in card.get("types", []) else 0
    type_water = 1 if "Water" in card.get("types", []) else 0
    type_grass = 1 if "Grass" in card.get("types", []) else 0
    return np.array([hp, retreat, type_fire, type_water, type_grass])
