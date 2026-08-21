const header = document.querySelector('.header');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    // Шапка стає темною при скролі
    header.classList.toggle('scrolled', window.scrollY > 40);

    // Паралакс ефект Hero
    if (heroBg) {
        heroBg.style.transform =
            `scale(1.03) translateY(${Math.min(window.scrollY * 0.12, 80)}px)`;
    }
});


// Анімація появи секцій при скролі
const observer = new IntersectionObserver(
    entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 70);

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});


// Мобільне меню
document.querySelector('.menu-btn')?.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('open');
});