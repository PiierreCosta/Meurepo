document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
        '.section-header, .about-text, .about-highlight, .skill-card, .project-card, .experience-item, .contact-card, .hero-image-card'
    );

    revealElements.forEach((el, index) => {
        el.classList.add('reveal-element');
        if (el.classList.contains('skill-card')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        }
        revealObserver.observe(el);
    });

    const animationStyles = document.createElement('style');
    animationStyles.innerHTML = `
        .reveal-element {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
        }
        .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animationStyles);
});
