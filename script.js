<!-- Sélectionne toutes les bulles -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Réinitialise toutes les bulles à la taille de base
                items.forEach(innerItem => {
                    innerItem.style.height = '100px';
                });
                // Agrandit la bulle survolée
                item.style.height = '150px';
            });

            item.addEventListener('mouseleave', () => {
                // Réinitialise uniquement la bulle quittée
                item.style.height = '100px';
            });
        });

        // ✅ Initialisation EmailJS (Remplace "0Csm4BDBK2eZjyc4x" par ton ID réel)
        emailjs.init("0Csm4BDBK2eZjyc4x");

        // ✅ Gestion de l'envoi du formulaire
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Empêche l'envoi classique du formulaire

                // Collecte des données
                const formData = new FormData(event.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

   // Envoi de l'email via EmailJS
        emailjs.send("service_3dynkge", "template_zgtmnx9", {
            name: name,            // Nom de l'utilisateur
            email: email,          // Email de l'utilisateur
            message: message,      // Message de l'utilisateur
            time: new Date().toLocaleTimeString(),  // Heure actuelle
            title: "Message de Contact" // Titre du message
        }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message envoyé avec succès !');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Erreur lors de l\'envoi du message, veuillez réessayer plus tard.');
        });
    });
</script>
