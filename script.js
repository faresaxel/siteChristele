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

// Sélection des services
const services = document.querySelectorAll('.service');

// Ajoute un écouteur d'événement pour chaque service
services.forEach(service => {
    service.addEventListener('click', () => {
        // Supprime la classe active de tous les services
        services.forEach(innerService => {
            innerService.classList.remove('active');
        });
        
        // Ajoute la classe active à l'élément cliqué
        service.classList.add('active');
    });
});

