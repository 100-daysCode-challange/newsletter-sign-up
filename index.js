// validating the email address.

function emailValidation() {
    const mail = document.querySelector(".email").value;

    var regx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (regx.test(mail)) {
      alert("Thanks for subscribing!");
      return true;
    } else {
      alert("wrong email");
      return false;
    }
}