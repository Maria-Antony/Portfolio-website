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

function toggleDescription(descId) {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });

    const selectedDesc = document.getElementById(descId);
    selectedDesc.classList.toggle('show'); // Toggle the selected description
}
