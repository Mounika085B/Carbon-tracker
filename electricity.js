function calculateElectricity() {
    let units = document.getElementById("units").value;

    if (units === "" || units <= 0) {
        alert("Please enter valid electricity units");
        return;
    }

    // Average emission factor
    let emissionFactor = 0.82; // kg CO₂ per kWh

    let carbon = units * emissionFactor;

    document.getElementById("result").innerHTML =
        "Electricity Carbon Footprint = " +
        carbon.toFixed(2) + " kg CO₂";
}
