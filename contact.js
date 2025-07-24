const form = document.getElementById("contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const charCount = document.getElementById("character-count");
const formErrors = document.getElementById("form-errors");

let form_errors = [];

// Masking Mechanism
function flashField(field, message) {
    const errorMessage = field.parentElement.querySelector('span');
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
    field.classList.add("invalid");

     // After 2s, fade out
    setTimeout(() => {
        errorMessage.classList.remove("show");
        errorMessage.classList.add("hide");
        field.classList.remove("invalid");
        field.style.borderColor = contrastColor;
    }, 2000);

    // After fade completes, clear text (after transition ends 500ms later)
    setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.classList.remove("hide");
    }, 2500);
}

// Name Validation
nameField.addEventListener("input", function(e) {
    const originalMessage = this.value;
    const filteredMessage = originalMessage.replace(/[^a-zA-Z\s-]/g, "");

    if (nameField.validity.valueMissing) {
        flashField(nameField, "You need to enter a name.");
        emailField.setCustomValidity("You need to enter a name.");
        form_errors.push({ field: "name", error: "Missing name" });
    } else if (originalMessage !== filteredMessage) {
        this.value = filteredMessage;
        flashField(nameField, "Please enter letters and spaces only.");
        emailField.setCustomValidity("Please enter letters and spaces only.");
        form_errors.push({ field: "name", error: "Invalid character(s)" });
    }
});

// Email Validation
emailField.addEventListener("input", function(e) {
    if (emailField.validity.valueMissing) {
        flashField(emailField, "You need to enter an email address.")
        emailField.setCustomValidity("You need to enter an email address.");
        form_errors.push({ field: "name", error: "Missing email" });
    } else if (emailField.validity.typeMismatch) {
        flashField(emailField, "Please enter a valid email address.")
        emailField.setCustomValidity("Please enter a valid email address.");
        form_errors.push({ field: "name", error: "Invalid email address" });
    } else {
        emailField.setCustomValidity("");
    }
});

// Character Countdown
messageField.addEventListener("input", function() {
    const maxLength = messageField.getAttribute("maxlength");
    const currentLength = messageField.value.length;
    const remaining = maxLength - currentLength;

    charCount.textContent = `${remaining} characters remaining`;

    if (remaining <= 25 && remaining != 0) {
        messageField.style.borderColor = "orange";
    } else {
        messageField.style.borderColor = contrastColor;
    }

    if (remaining <= 0) {
        flashField(messageField, "Character limit reached.");
        form_errors.push({ field: "message", error: "Exceeded character limit" });
    }
});

// Pass encoded errors to hidden field
form.addEventListener("submit", function() {
    formErrors.value = JSON.stringify(form_errors);
});