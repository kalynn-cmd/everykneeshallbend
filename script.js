document.addEventListener("DOMContentLoaded", function () {
    const grantForm = document.getElementById("grantRequestForm");

    if (!grantForm) {
        return;
    }

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
        .then(function (response) {
            if (!response.ok) {
                return response.text().then(function (text) {
                    throw new Error(text || "The form could not be submitted.");
                });
            }

            return response.json();
        })
        .then(function () {
            openGrantPopup();
            grantForm.reset();
        })
        .catch(function (error) {
            console.error("Form submission error:", error);

            alert(
                "There was an error submitting the form. If this is the first time using the form, please check everykneeshallbend@gmail.com for the FormSubmit confirmation email. After confirming, try again."
            );
        })
        .finally(function () {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    });
});

function openGrantPopup() {
    const popup = document.getElementById("grantPopup");
    const assistanceSection = document.getElementById("assistance");

    if (popup) {
        popup.style.display = "flex";
    }

    if (assistanceSection) {
        assistanceSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function closeGrantPopup() {
    const popup = document.getElementById("grantPopup");

    if (popup) {
        popup.style.display = "none";
    }
}