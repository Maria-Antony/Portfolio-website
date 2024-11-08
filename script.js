document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully');
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showDescription(element) {
    const description = element.querySelector('.description');
    description.classList.remove('hidden');
    description.classList.add('show');
}

function hideDescription(element) {
    const description = element.querySelector('.description');
    description.classList.remove('show');
    description.classList.add('hidden');
}

