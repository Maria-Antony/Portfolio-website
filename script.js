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

// document.addEventListener("DOMContentLoaded", function() {
//     const educationItems = document.querySelectorAll(".timeline-item"); // Select all education items

//     function handleScroll() {
//         educationItems.forEach(item => {
//             const itemTop = item.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             // Add the "visible" class if the item is in view
//             if (itemTop < windowHeight * 0.85 && itemTop > 0) {
//                 item.classList.add("visible");
//             } else {
//                 // Optionally remove the "visible" class if the item is out of view
//                 item.classList.remove("visible");
//             }
//         });
//     }
document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll('.education-item');

    const options = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, options);

    educationItems.forEach(item => {
        observer.observe(item);
    });
});

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

    // Toggle the "show" class to reveal or hide the description
    description.classList.toggle('show');

    // Smooth scroll into view if it's being shown
    if (description.classList.contains('show')) {
        description.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleDescription(event, descriptionId) {
    event.preventDefault();

    const description = document.getElementById(descriptionId);

    // Toggle the "show" class to reveal or hide the description
    if (description.classList.contains('show')) {
        description.classList.remove('show');
    } else {
        // Hide any other open descriptions
        document.querySelectorAll('.project-description.show').forEach(desc => {
            desc.classList.remove('show');
        });

        // Show the clicked description and scroll to it
        description.classList.add('show');
        description.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}





