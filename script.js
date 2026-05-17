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
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not successful.");
                }

                return response.text();
            })
            .then(data => {
                if (data.trim() === "success") {
                    openGrantPopup();
                    grantForm.reset();
                } else {
                    alert("There was an error submitting the form. Please try again.");
                }
            })
            .catch(error => {
                alert("There was an error submitting the form. Please try again.");
            });
        });
    }
});

function openGrantPopup() {
    const popup = document.getElementById("grantPopup");

    if (popup) {
        popup.style.display = "flex";
        popup.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function closeGrantPopup() {
    const popup = document.getElementById("grantPopup");

    if (popup) {
        popup.style.display = "none";
    }
}