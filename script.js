document.getElementById("grantForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("confirmationMessage").innerText =
        "Thank you. Your grant request has been received. We will respond to you soon.";

    this.reset();
});// JavaScript Document