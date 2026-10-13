document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Función para alternar el menú en móviles
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        // Cambiar el icono del botón
        if (sidebar.classList.contains('active')) {
            menuToggle.textContent = '✕'; // Icono de cerrar
            menuToggle.setAttribute('aria-label', 'Cerrar menú');
        } else {
            menuToggle.textContent = '☰'; // Icono de hamburguesa
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        }
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });

    // Opcional: Resaltar el enlace activo al hacer scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.style.color = '#00509e';
                link.style.fontWeight = 'bold';
            } else {
                link.style.color = '#444';
                link.style.fontWeight = '500';
            }
        });
    });
});
