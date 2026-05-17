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
                openGrantPopup();
                grantForm.reset();
            })
            .catch(error => {
                alert("There was an error submitting the form. Please try again.");
            });
        });
    }
});

function openGrantPopup() {
    document.getElementById("grantPopup").style.display = "flex";
}

function closeGrantPopup() {
    document.getElementById("grantPopup").style.display = "none";
}