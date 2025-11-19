// ----- Dummy login credentials -----
const validEmail = "student@greenzone.com";
const validPassword = "greenzone123";

// ----- Login functionality -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get input values and trim spaces
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const error = document.getElementById("error");

        // Check credentials
        if (email === validEmail && password === validPassword) {
            // Save login state in localStorage
            localStorage.setItem("loggedIn", "true");
            // Redirect to info page
            window.location.href = "info.html";
        } else {
            error.textContent = "Invalid email or password!";
        }
    });
}

// ----- Protect info.html from direct access -----
if (window.location.pathname.includes("info.html")) {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        // Redirect to login if not logged in
        window.location.href = "index.html";
    }
}

// ----- Logout functionality -----
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
