document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // adjust based on navbar height
            const top = target.offsetTop - offset;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    });
});