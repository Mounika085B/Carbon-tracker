function calculateWaste() {
    let waste = document.getElementById("waste").value;

    if (waste === "" || waste <= 0) {
        alert("Please enter a valid waste amount in kg");
        return;
    }

    // Average emission factor for waste (approximate)
    let emissionFactor = 2.0; // kg CO₂ per kg of waste

    let carbonFootprint = waste * emissionFactor;

    document.getElementById("result").innerHTML =
        "Waste Carbon Footprint = " + carbonFootprint.toFixed(2) + " kg CO₂";
}
