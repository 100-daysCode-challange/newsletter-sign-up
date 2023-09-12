// validating the email address.

function emailValidation() {
    const formContainer = document.querySelector(".form-container");
    const notification = document.querySelector(".notification");
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if (email.match(pattern)) {
        formContainer.style.display = "none";
        notification.style.display = "block";
        return true;
    } else {
      alert("wrong email");
      return false;
    }
}

function returnToMainPage(){
    window.location.href = "index.html"
}