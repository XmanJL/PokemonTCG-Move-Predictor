async function predict() {
  const gameState = document.getElementById("gameState").value;
  const response = await fetch("http://localhost:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: gameState
  });
  const data = await response.json();
  document.getElementById("result").innerText = "Predicted Move: " + data.prediction;
}
