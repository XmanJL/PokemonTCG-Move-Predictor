document
  .getElementById("cardForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form values
    const hp = parseInt(document.getElementById("hp").value) || 0;
    const type = document.getElementById("types").value;
    const retreatCost = parseInt(document.getElementById("retreat").value) || 0;

    // Show loading state
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
    <div class="loading">
      <div class="pokeball"></div>
      <p>Analyzing card...</p>
    </div>
  `;

    try {
      // Prepare data for API
      const data = {
        hp: hp,
        types: [type],
        convertedRetreatCost: retreatCost,
      };

      // Call the API
      const response = await fetch("http://localhost:8000/predict-rarity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Process result
      const result = await response.json();

      // Get emoji and color based on rarity
      const { emoji, color } = getRarityStyle(result.rarity);

      // Update UI with the prediction
      resultElement.style.background = color;
      resultElement.classList.add("reveal");
      resultElement.innerHTML = `
      <div>
        <p>${emoji}</p>
        <h3>Predicted Rarity</h3>
        <p class="predicted-rarity">${result.rarity}</p>
      </div>
    `;

      // Remove animation class after animation completes
      setTimeout(() => {
        resultElement.classList.remove("reveal");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      resultElement.innerHTML = `
      <div class="error">
        <p>❌</p>
        <p>Couldn't predict rarity</p>
        <p class="error-details">Please try again later</p>
      </div>
    `;
    }
  });

// Helper function to get styles for different rarities
function getRarityStyle(rarity) {
  const rarityStyles = {
    Common: {
      emoji: "⚪️",
      color: "linear-gradient(135deg, #e6e6e6 0%, #ffffff 100%)",
    },
    Uncommon: {
      emoji: "🟢",
      color: "linear-gradient(135deg, #7fbf7f 0%, #b8e0b8 100%)",
    },
    Rare: {
      emoji: "⭐",
      color: "linear-gradient(135deg, #ffcc33 0%, #f7e279 100%)",
    },
    "Rare Holo": {
      emoji: "✨",
      color: "linear-gradient(135deg, #7fb3d5 0%, #a9cce3 100%)",
    },
    "Rare Ultra": {
      emoji: "🌟",
      color: "linear-gradient(135deg, #c39bd3 0%, #d7bde2 100%)",
    },
    // Default for any other rarity
    default: {
      emoji: "❓",
      color: "linear-gradient(135deg, #f5cba7 0%, #fad7a0 100%)",
    },
  };

  return rarityStyles[rarity] || rarityStyles.default;
}

// Add this CSS to styles.css for loading animation
const style = document.createElement("style");
style.textContent = `
  .loading {
    text-align: center;
  }
  
  .pokeball {
    width: 60px;
    height: 60px;
    background: linear-gradient(to bottom, #f00 0%, #f00 50%, #fff 50%, #fff 100%);
    border: 5px solid #333;
    border-radius: 50%;
    position: relative;
    margin: 0 auto 20px;
    animation: shake 1.5s ease-in-out infinite;
    transform-origin: center;
  }
  
  .pokeball:before {
    content: '';
    position: absolute;
    background: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid #333;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }
  
  @keyframes shake {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(-10deg); }
    40% { transform: rotate(10deg); }
    60% { transform: rotate(-10deg); }
    80% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }
  
  .predicted-rarity {
    font-size: 1.8rem;
    margin-top: 10px;
    font-weight: bold;
  }
  
  .error {
    color: #d63031;
  }
  
  .error-details {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 10px;
  }
`;
document.head.appendChild(style);
