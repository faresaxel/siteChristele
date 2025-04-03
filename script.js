// Sélectionne toutes les bulles
const items = document.querySelectorAll('.service');

// Vérifie si l'utilisateur est sur mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches;

items.forEach(item => {
    if (!isMobile) {
        // Gestion du survol pour ordinateur
        item.addEventListener('mouseenter', () => {
            // Réinitialise la hauteur et masque les textes de toutes les bulles
            items.forEach(innerItem => {
                innerItem.style.height = '100px';
                innerItem.querySelector(".service-description").style.display = "none";
            });
            // Agrandit la hauteur et affiche le texte de la bulle survolée
            item.style.height = '150px';
            item.querySelector(".service-description").style.display = "block";
        });

        item.addEventListener('mouseleave', () => {
            // Réinitialise la hauteur et masque le texte lorsque la souris quitte
            item.style.height = '100px';
            item.querySelector(".service-description").style.display = "none";
        });
    } else {
        // Gestion du clic pour mobile
        item.addEventListener('click', () => {
            // Réinitialise toutes les bulles et masque les textes
            items.forEach(innerItem => {
                innerItem.classList.remove("active");
                innerItem.querySelector(".service-description").style.display = "none";
            });

            // Active uniquement la bulle cliquée et affiche son texte
            item.classList.add("active");
            item.querySelector(".service-description").style.display = "block";
        });
    }
});
