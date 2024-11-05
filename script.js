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

function showDescription(descId) {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });

    const selectedDesc = document.getElementById(descId);
    selectedDesc.classList.add('show'); // Show the selected description

    // Position the description box next to the hovered timeline item
    const timelineItem = event.currentTarget;
    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'block'; // Show the description box
    descriptionBox.style.top = `${timelineItem.getBoundingClientRect().top}px`; // Align with the top of the item
    descriptionBox.style.left = `${timelineItem.getBoundingClientRect().right + 10}px`; // Position to the right of the item
}

function hideDescription(descId) {
    const selectedDesc = document.getElementById(descId);
    selectedDesc.classList.remove('show'); // Hide the selected description
    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'none'; // Hide the description box
}
