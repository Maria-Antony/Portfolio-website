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

let activeDescription = null;

function toggleDescription(id, event) {
    const descriptionBox = document.querySelector('.description');
    const descriptionContent = document.getElementById(id);

    // Check if the clicked item is already active
    if (activeDescription === id) {
        hideDescription();
        return;
    }

    // Hide previous description content
    document.querySelectorAll('.description p').forEach(desc => {
        desc.classList.add('hidden');
    });

    // Show the new content
    descriptionContent.classList.remove('hidden');
    descriptionBox.style.display = 'block';
    descriptionBox.classList.add('show'); // Trigger animation

    // Position the description box
    descriptionBox.style.left = `${event.pageX + 20}px`;
    descriptionBox.style.top = `${event.pageY + 20}px`;

    activeDescription = id; // Set current active description
}

function hideDescription() {
    const descriptionBox = document.querySelector('.description');
    descriptionBox.classList.remove('show'); // Trigger animation out
    setTimeout(() => {
        descriptionBox.style.display = 'none';
    }, 300); // Match this to animation duration

    activeDescription = null;
}


