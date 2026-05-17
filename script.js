document.addEventListener("DOMContentLoaded", function () {
    const grantForm = document.getElementById("grantRequestForm");

    if (grantForm) {
        grantForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(grantForm);

            fetch("sendmail.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(
                    "Thank you for filling out this information. We will be in touch to ask for additional information and to give you an approximate funding date (e.g., are funds available at this time or are we on a waiting list cycle).\n\n" +
                    "Please note we will need you to gather the following additional information: A letter from the Pastor explaining what he hopes to accomplish in his parish by installing altar rails, a letter of support from the local Bishop, any estimates you have received from contractors, pictures of the current church altar area – any mock ups of how it will look after the altar rails are installed, any pictures of altar rails you hope to install.\n\n" +
                    "Thank you and we will be in touch shortly!\n\n" +
                    "In general so you know: If you are approved for the grant, money is allocated as invoices come due, so that the church is not given a lump sum at any one time.\n\n" +
                    "This is not aimed at churches currently under construction, we hope money for altar rails will be raised during their capital campaign.\n\n" +
                    "We are not able to speak to the media at this time. We are a group of benefactors who want the attention to be on humble devotion to our Eucharistic Lord, not about who we are."
                );

                grantForm.reset();
            })
            .catch(error => {
                alert("There was an error submitting the form. Please try again.");
            });
        });
    }
});document.getElementById("grantForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("confirmationMessage").innerText =
        "Thank you. Your grant request has been received. We will respond to you soon.";

    this.reset();
});// JavaScript Document