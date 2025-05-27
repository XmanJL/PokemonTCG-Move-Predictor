import torch
from model import RarityPredictor

def train():
    # Dummy training loop
    model = RarityPredictor(128, 256, 10)
    print("Training model...")

if __name__ == "__main__":
    train()
