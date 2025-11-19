// Select all circles
const circles = document.querySelectorAll('.circle');

// Add click event to each circle
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const label = circle.nextElementSibling.textContent.trim();

        switch(label) {
            case "Transportation":
                window.location.href = "transportation.html";
                break;
            case "Waste Generation":
                window.location.href = "waste.html";
                break;
            case "Energy":
                window.location.href = "energy.html";
                break;
            case "Water":
                window.location.href = "water.html";
                break;
            default:
                alert("Page not found!");
        }
    });
});
