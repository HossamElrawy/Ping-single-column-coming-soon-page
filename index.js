/**
 * PING COMING SOON PAGE - EMAIL VALIDATION
 * 
 * This script handles:
 * 1. Email input validation
 * 2. Displaying warning messages
 * 3. UI feedback for invalid inputs
 */

// DOM Elements
const notifyButton = document.querySelector(".js-notify-but");
const emailInput = document.querySelector(".js-input-place");
const warningMessage = document.querySelector(".js-warn-para");

// Event Listeners
notifyButton.addEventListener("click", validateEmailInput);

/**
 * Validates the email input and displays appropriate UI feedback
 */
function validateEmailInput() {
  if (!isValidEmail()) {
    showWarning();
  } else {
    hideWarning();
    // Here you could add code to submit the form
    console.log("Valid email - would submit form");
  }
}

/**
 * Checks if the email input is valid
 * @returns {boolean} True if email is valid, false otherwise
 */
function isValidEmail() {
  const inputValue = emailInput.value.trim();
  return (
    inputValue !== "" && 
    inputValue.includes("@") && 
    inputValue.includes(".") &&
    inputValue.length > 5 // Basic length check
  );
}

/**
 * Displays the warning message and error styling
 */
function showWarning() {
  emailInput.classList.add("input-data-warn");
  warningMessage.classList.add("not-hidden");
}

/**
 * Hides the warning message and removes error styling
 */
function hideWarning() {
  emailInput.classList.remove("input-data-warn");
  warningMessage.classList.remove("not-hidden");
}