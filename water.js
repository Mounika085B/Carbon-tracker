function calculateWater() {
    let water = document.getElementById("water").value;

    if (water === "" || water <= 0) {
        alert("Please enter a valid water usage in liters");
        return;
    }

    // Average emission factor for water (approximate)
    let emissionFactor = 0.001; // kg CO₂ per liter of water

    let carbonFootprint = water * emissionFactor;

    document.getElementById("result").innerHTML =
        "Water Carbon Footprint = " + carbonFootprint.toFixed(3) + " kg CO₂";
}
