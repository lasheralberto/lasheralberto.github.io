// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal content on scroll
window.addEventListener('scroll', () => {
    const main = document.querySelector('main');
    const mainPosition = main.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (mainPosition < screenPosition) {
        main.classList.add('visible');
    }
});
