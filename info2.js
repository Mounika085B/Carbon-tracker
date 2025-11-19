// Select all circles
const circles = document.querySelectorAll('.circle');

// Content section where dynamic inputs will appear
const content = document.getElementById('category-content');

// Carbon calculation data
const carbonData = {
    "Transportation": { text: "Enter kilometers traveled per day:", factor: 0.21 },
    "Waste Generation": { text: "Enter waste produced per day (kg):", factor: 0.5 },
    "Energy": { text: "Enter energy consumed per day (kWh):", factor: 0.85 },
    "Water": { text: "Enter water consumed per day (liters):", factor: 0.001 }
};

// Add click event to each circle
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const label = circle.nextElementSibling.textContent.trim();
        const data = carbonData[label];

        // Update content dynamically
        content.innerHTML = `
            <h2>${label}</h2>
            <p>${data.text}</p>
            <input type="number" id="input-value" placeholder="Enter value">
            <button id="calculate">Calculate</button>
            <p id="result"></p>
        `;

        // Calculate carbon when user clicks "Calculate"
        document.getElementById('calculate').addEventListener('click', () => {
            const value = Number(document.getElementById('input-value').value);
            if (isNaN(value) || value <= 0) {
                document.getElementById('result').textContent = "Please enter a valid number.";
                return;
            }
            const carbon = value * data.factor;
            document.getElementById('result').textContent = `Estimated Carbon: ${carbon.toFixed(2)} kg CO₂/day`;
        });
    });
});
