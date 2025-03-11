document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtén el ID del destino
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 70; // Ajuste para la altura de la barra fija
            const elementPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});