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

function toggleDescription(event, descriptionId) {
    event.preventDefault(); // Prevent default link behavior

    const description = document.getElementById(descriptionId);
    const link = event.target;

    // Toggle 'expanded' class on the description
    description.classList.toggle("expanded");

    // Update link text based on the current state
    if (description.classList.contains("expanded")) {
        link.textContent = "Hide Project";
    } else {
        link.textContent = "View Project";
    }
}

// Initialize all descriptions to be hidden on page load
document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll(".project-description");
    descriptions.forEach(description => {
        description.classList.remove("expanded"); // Ensure descriptions are initially hidden
    });
});

// Initialize all descriptions to be hidden on page load
document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll(".project-description");
    descriptions.forEach(description => {
        description.style.display = "none";
    });
});

// Papers code below

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".paper-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Fade in
            } else {
                entry.target.classList.remove("visible"); // Fade out
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold for when the effect should trigger

    items.forEach(item => observer.observe(item));
});





