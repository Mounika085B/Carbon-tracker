function calculateFood() {
    let food = document.getElementById("food").value;

    if (food === "" || food <= 0) {
        alert("Please enter a valid food amount in kg");
        return;
    }

    // Average emission factor for food (kg CO2 per kg food)
    let emissionFactor = 2.5; // approximate average

    let carbonFootprint = food * emissionFactor;

    document.getElementById("result").innerHTML =
        "Food Carbon Footprint = " + carbonFootprint.toFixed(2) + " kg CO₂";
}
