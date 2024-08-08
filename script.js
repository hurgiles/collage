// script.js

document.addEventListener('DOMContentLoaded', () => {
    const roseContainer = document.getElementById('rose-container');
    const collageContainer = document.getElementById('collage-container');
    const button = document.getElementById('to-collage');

    // Función para mostrar la animación de la rosa
    const showRoseAnimation = () => {
        roseContainer.classList.add('show');
        setTimeout(() => {
            button.style.display = 'block';
        }, 5000); // Ajusta el tiempo según la duración de la animación
    };

    // Función para mostrar el collage animado
    const showCollageAnimation = () => {
        collageContainer.classList.add('show');
    };

    // Evento para el botón
    button.addEventListener('click', () => {
        roseContainer.style.display = 'none';
        button.style.display = 'none';
        showCollageAnimation();
    });

    // Inicia la animación de la rosa al cargar la página
    showRoseAnimation();
});
