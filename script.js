document.addEventListener("DOMContentLoaded", function () {
    const grantForm = document.getElementById("grantRequestForm");

    if (grantForm) {
        grantForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const submitButton = grantForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton ? submitButton.textContent : "Submit Grant Request";

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Submitting...";
            }

            const formData = new FormData(grantForm);

            fetch(grantForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("The form could not be submitted.");
                }

                return response.json();
            })
            .then(data => {
                openGrantPopup();
                grantForm.reset();
            })
            .catch(error => {
                alert("There was an error submitting the form. Please try again or email everykneeshallbend@gmail.com directly.");
            })
            .finally(() => {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            });
        });
    }
});

function openGrantPopup() {
    const popup = document.getElementById("grantPopup");

    if (popup) {
        popup.style.display = "flex";
    }
}

function closeGrantPopup() {
    const popup = document.getElementById("grantPopup");

    if (popup) {
        popup.style.display = "none";
    }
}