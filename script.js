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

document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll(".timeline-item"); // Select all education items

    function handleScroll() {
        educationItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Add the "visible" class if the item is in view
            if (itemTop < windowHeight * 0.85 && itemTop > 0) {
                item.classList.add("visible");
            } else {
                // Optionally remove the "visible" class if the item is out of view
                item.classList.remove("visible");
            }
        });
    }

    // Debounce function to limit the rate at which the handleScroll function is called
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    window.addEventListener("scroll", debounce(handleScroll, 100));
    handleScroll(); // Trigger once on load in case elements are already in view
});

// # Education

document.addEventListener("DOMContentLoaded", function() {
    const experienceItems = document.querySelectorAll(".experience-item");

    function handleScroll() {
        experienceItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Add the "visible" class if the item is in view
            if (itemTop < windowHeight * 0.85 && itemTop > 0) {
                item.classList.add("visible");
            } else {
                // Optionally remove the "visible" class if the item is out of view
                item.classList.remove("visible");
            }
        });
    }

    // Debounce function to limit the rate at which the handleScroll function is called
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    window.addEventListener("scroll", debounce(handleScroll, 100));
    handleScroll(); // Trigger once on load in case elements are already in view
});

function toggleDescription(descId) {
    const description = document.getElementById(descId);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block"; // Show the description
    } else {
        description.style.display = "none"; // Hide the description
    }
}
