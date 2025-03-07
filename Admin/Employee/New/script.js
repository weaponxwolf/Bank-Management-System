function registerEmployee() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const address = document.getElementById("address").value;
    const contactNumber = document.getElementById("contactNumber").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        return;
    }

    const ssnId = "SSN" + Math.floor(100000 + Math.random() * 900000); // Random 6-digit SSN

    const employeeData = {
        ssnId,
        firstName,
        lastName,
        email,
        address,
        contactNumber
    };

    showAcknowledgmentScreen(employeeData);
}

function showAcknowledgmentScreen(employeeData) {
    document.body.innerHTML = `
        <section class="container">
            <header>Registration Successful</header>
            <div class="success-message">Employee Registration successful.</div>
            <div class="details">
                <p><strong>Employee SSN ID:</strong> ${employeeData.ssnId}</p>
                <p><strong>Employee Name:</strong> ${employeeData.firstName} ${employeeData.lastName}</p>
                <p><strong>Email:</strong> ${employeeData.email}</p>
            </div>
        </section>
        <style>
            .container {
                max-width: 500px;
                margin: 50px auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            }
            .success-message {
                color: green;
                font-weight: bold;
                text-align: center;
                margin: 15px 0;
            }
            .details {
                margin-top: 20px;
            }
            p {
                margin: 5px 0;
                font-size: 16px;
            }
        </style>
    `;
}
