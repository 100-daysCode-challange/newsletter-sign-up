// validating the email address.

function emailValidation() {
  const formContainer = document.querySelector(".main-container");
  const notification = document.querySelector(".notification");
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const errorMessage = document.querySelector(".error-message");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    formContainer.style.display = "none";
    notification.style.display = "block";
    return true;
  } else {
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.borderWidth = "2px";
    emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.5)";
    errorMessage.style.display = "block";
    return false;
  }
}

function returnToMainPage() {
  window.location.href = "index.html";
}
