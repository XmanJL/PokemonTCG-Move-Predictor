import torch
from model import MovePredictor

def train():
    # Dummy training loop
    model = MovePredictor(128, 256, 10)
    print("Training model...")

if __name__ == "__main__":
    train()
