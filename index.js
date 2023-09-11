// validating the email address.

function emailValidation() {
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if (email.match(pattern)) {
      alert("Thanks for subscribing!");
      return true;
    } else {
      alert("wrong email");
      return false;
    }
}