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

// Tab functionality for showing sections
const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');

const homeSection = document.getElementById('home-section');
const projectsSection = document.getElementById('projects-section');
const contactSection = document.getElementById('contact-section');

// Function to switch between sections
function showSection(section) {
    homeSection.style.display = 'none';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';

    section.style.display = 'block';
}

// Event listeners for navigation
homeLink.addEventListener('click', () => showSection(homeSection));
projectsLink.addEventListener('click', () => showSection(projectsSection));
contactLink.addEventListener('click', () => showSection(contactSection));

// Default to showing the home section initially
showSection(homeSection);
