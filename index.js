const form = document.getElementById('form');
const errorMessage = document.getElementById('email-error');
const emailInput = document.getElementById('email')
const successMessage = document.getElementById('success-message-container');
const successEmail = document.getElementById('success-email');
const dismissMessageButton = document.getElementById('dismiss-message-button');

function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (isValidEmail(data.email)) {
        errorMessage.classList.remove('active');
        emailInput.classList.remove('active');
        successEmail.textContent = data.email;
        successMessage.style.display = 'flex';
        successEmail.textContent = data.email;
    } else {
        errorMessage.classList.add('active');
        errorMessage.textContent = "Please provide a valid email address";
        emailInput.classList.add('active');
    }
}

form.addEventListener('submit', handleSubmit);

function dismissMessage() {
    successMessage.style.display = 'none';
}

dismissMessageButton.addEventListener('click', dismissMessage)
