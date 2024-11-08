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

function showDescription(id) {
    // Hide all descriptions first
    document.querySelectorAll('.description p').forEach(desc => {
        desc.classList.add('hidden');
    });

    // Show the relevant description
    document.getElementById(id).classList.remove('hidden');
    document.querySelector('.description').style.display = 'block';
}

function hideDescription() {
    document.querySelector('.description').style.display = 'none';
}

