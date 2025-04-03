// Sélectionne toutes les bulles
const items = document.querySelectorAll('.menu-item');

// Ajoute un écouteur d'événement de survol à chaque bulle
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Lorsque la souris entre dans une bulle, réinitialise la hauteur de toutes les bulles
        items.forEach(innerItem => {
            innerItem.style.height = '100px'; // Retour à la taille initiale
        });
        // Agrandit la hauteur de la bulle survolée
        item.style.height = '150px';
    });
    
    item.addEventListener('mouseleave', () => {
        // Lorsque la souris quitte la bulle, réinitialise la hauteur de toutes les bulles
        item.style.height = '100px'; // Retour à la taille initiale
    });
});

// Ajoute un écouteur d'événement de survol à chaque bulle
service.forEach(service => {
    service.addEventListener('click', () => {
        // Lorsque la souris entre dans une bulle, réinitialise la hauteur de toutes les bulles
        service.forEach(innerItem => {
            innerItem.style.height = '100px'; // Retour à la taille initiale
        });
        // Agrandit la hauteur de la bulle survolée
        service.style.height = '150px';
    });
    
    item.addEventListener('mouseleave', () => {
        // Lorsque la souris quitte la bulle, réinitialise la hauteur de toutes les bulles
        service.style.height = '100px'; // Retour à la taille initiale
    });
});
