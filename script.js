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

function showDescription(id, event) {
    const descriptionBox = document.querySelector('.description');

    // Hide all descriptions first
    document.querySelectorAll('.description p').forEach(desc => {
        desc.classList.add('hidden');
    });

    // Show the relevant description
    document.getElementById(id).classList.remove('hidden');

    // Display and position the description box near the hovered item
    descriptionBox.style.display = 'block';
    descriptionBox.style.left = `${event.pageX + 15}px`; // Position to the right of the mouse
    descriptionBox.style.top = `${event.pageY + 15}px`;  // Position below the mouse
}

function hideDescription() {
    document.querySelector('.description').style.display = 'none';
}

