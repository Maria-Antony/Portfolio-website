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

<<<<<<< HEAD
function showDescription(descId) {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });

    const selectedDesc = document.getElementById(descId);
    selectedDesc.classList.add('show'); // Show the selected description

    const educationSection = document.getElementById('education');
    educationSection.style.transform = 'translateX(-200px)'; // Move left by 200px

    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'block'; // Show the description box
}
=======
function showDescription(descId) {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });
>>>>>>> a1abadb54b0fdec7c071637facfcdb7468f8e154

<<<<<<< HEAD
function hideDescription() {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });

    const educationSection = document.getElementById('education');
    educationSection.style.transform = 'translateX(0)'; // Reset position

    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'none'; // Hide the description box
=======
    const selectedDesc = document.getElementById(descId);
    selectedDesc.classList.add('show'); // Show the selected description

    const educationSection = document.getElementById('education');
    educationSection.style.transform = 'translateX(-200px)'; // Move left by 200px

    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'block'; // Show the description box
>>>>>>> a1abadb54b0fdec7c071637facfcdb7468f8e154
}

function hideDescription() {
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => {
        desc.classList.remove('show'); // Hide all descriptions
    });

    const educationSection = document.getElementById('education');
    educationSection.style.transform = 'translateX(0)'; // Reset position

    const descriptionBox = document.querySelector('.description');
    descriptionBox.style.display = 'none'; // Hide the description box
}
