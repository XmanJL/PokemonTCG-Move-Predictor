document
  .getElementById("cardForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = {
      hp: 0,
      types: ["Dummy"],
      convertedRetreatCost: 0,
    };

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById("result").innerText =
      "Predicted Rarity: " + result.rarity;
  });
