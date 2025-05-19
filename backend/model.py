import torch
import torch.nn as nn

class MovePredictor(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(MovePredictor, self).__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out, _ = self.lstm(x)
        return self.fc(out[:, -1, :])

def load_model(path):
    model = MovePredictor(input_size=128, hidden_size=256, output_size=10)
    model.load_state_dict(torch.load(path, map_location=torch.device('cpu')))
    model.eval()
    return model

def predict(model, input_data):
    # Placeholder logic
    return "opponent_move"
