<!-- Sélectionne toutes les bulles -->
<script>
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
