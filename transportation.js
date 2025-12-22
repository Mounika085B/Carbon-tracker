function calculate() {
    let distance = document.getElementById("distance").value;
    let emissionFactor = parseFloat(document.getElementById("transport").value);

    if (distance === "" || distance <= 0) {
        alert("Please enter a valid distance in km");
        return;
    }

    // Carbon footprint = distance * emission factor (kg CO2 per km)
    let carbonFootprint = distance * emissionFactor;

    document.getElementById("result").innerHTML =
        "Transportation Carbon Footprint = " + carbonFootprint.toFixed(2) + " kg CO₂";
}
