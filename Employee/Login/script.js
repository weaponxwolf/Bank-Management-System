function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function handleLogin() {
    const ssnId = document.getElementById("ssnId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (ssnId === "" || password === "") {
        alert("Please enter both SSN ID and Password.");
        return;
    }

    // Show success message regardless of credentials (for demo purpose)
    showSuccessMessage();
}

function showSuccessMessage() {
    const messageBox = document.createElement("div");
    messageBox.className = "success-message";
    messageBox.innerText = "Employee Login successful.";

    document.body.appendChild(messageBox);

    // Hide message after 3 seconds and redirect to home page
    setTimeout(() => {
        document.body.removeChild(messageBox);
        window.location.href = "../index.html"; // Redirect to home page
    }, 3000);
}
