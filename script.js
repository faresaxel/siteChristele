// Sélectionne toutes les bulles
const items = document.querySelectorAll('.menu-item');

// Vérifie si l'utilisateur est sur mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches;

items.forEach(item => {
    if (!isMobile) {
        // Gestion du survol pour ordinateur
        item.addEventListener('mouseenter', () => {
            // Réinitialise la hauteur de toutes les bulles
            items.forEach(innerItem => {
                innerItem.style.height = '100px'; // Retour à la taille initiale
            });
            // Agrandit la hauteur de la bulle survolée
            item.style.height = '150px';
        });

        item.addEventListener('mouseleave', () => {
            // Réinitialise la hauteur lorsque la souris quitte
            item.style.height = '100px';
        });
    } else {
        // Gestion du clic pour mobile
        item.addEventListener('click', () => {
            // Supprime l'agrandissement de toutes les bulles
            items.forEach(innerItem => innerItem.classList.remove("active"));

            // Ajoute la classe active uniquement à la bulle cliquée
            item.classList.add("active");
        });
    }
});
