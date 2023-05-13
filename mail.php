<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs des champs du formulaire
    $nom = $_POST["nom-complet"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $message = $_POST["message"];

    // Formatage du message à envoyer
    $sujet = "Nouveau message depuis le formulaire de contact";
    $contenu = "Nom : $nom\n";
    $contenu .= "Email : $email\n";
    $contenu .= "Téléphone : $telephone\n\n";
    $contenu .= "Message :\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $nom <$email> \r\n";
    $headers .= "Reply-To: $email \r\n";

    // Envoi de l'e-mail
    if (mail("ayoub.kahfy@gmail.com", $sujet, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi du message.";
    }
}
?>
