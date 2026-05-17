<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "everykneeshallbend@gmail.com";
    $subject = "New Altar Rail Grant Request";

    $parishName = htmlspecialchars($_POST["parishName"]);
    $parishAddress = htmlspecialchars($_POST["parishAddress"]);
    $pastorName = htmlspecialchars($_POST["pastorName"]);
    $dioceseName = htmlspecialchars($_POST["dioceseName"]);
    $bishopName = htmlspecialchars($_POST["bishopName"]);
    $projectCost = htmlspecialchars($_POST["projectCost"]);
    $fullAmountRequest = htmlspecialchars($_POST["fullAmountRequest"]);
    $otherFunding = htmlspecialchars($_POST["otherFunding"]);
    $contactPerson = htmlspecialchars($_POST["contactPerson"]);
    $contactEmail = htmlspecialchars($_POST["contactEmail"]);
    $contactPhone = htmlspecialchars($_POST["contactPhone"]);

    $message = "
New Altar Rail Grant Request

Name of Parish: $parishName
Address of Parish: $parishAddress
Name of Pastor: $pastorName
Name of Diocese: $dioceseName
Name of Bishop: $bishopName
Expected Project Cost: $projectCost
Asking for Full Amount: $fullAmountRequest

Other Funding Information:
$otherFunding

Contact Person: $contactPerson
Contact Email: $contactEmail
Contact Phone: $contactPhone
";

    $headers = "From: $contactEmail\r\n";
    $headers .= "Reply-To: $contactEmail\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }

} else {
    echo "Invalid request.";
}
?>