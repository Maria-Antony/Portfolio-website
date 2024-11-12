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

function toggleDescription(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const description = event.target.nextElementSibling; // Get the next sibling (the description)

    // Toggle the 'show' class to expand/collapse the description
    description.classList.toggle('show');
}

// function toggleDescription(event, descriptionId) {
//     event.preventDefault();
//     const description = document.getElementById(descriptionId);

//     // Toggle the 'show' class to expand or collapse the description
//     description.classList.toggle("show");
// }



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

function toggleDescription(event, descriptionId) {
    event.preventDefault();
    const description = document.getElementById(descriptionId);

    // Toggle the 'show' class to expand or collapse the description
    description.classList.toggle("show");
}

// Testimony section

// let currentIndex = 0;
// const testimonials = document.querySelectorAll('.testimonial');

// function showNextTestimonial() {
//   // Hide the current testimonial
//   testimonials[currentIndex].classList.remove('show');

//   // Move to the next testimonial or loop back to the first
//   currentIndex = (currentIndex + 1) % testimonials.length;

//   // Show the next testimonial
//   testimonials[currentIndex].classList.add('show');
// }

// // Set an interval to show each testimonial for 10 seconds (10000 milliseconds)
// setInterval(showNextTestimonial, 10000);

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial-show');
    let currentIndex = 0;
  
    function showNextTestimonial() {
      testimonials[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % testimonials.length;
    //   testimonials[currentIndex].classList.add('active');
       // Add 'active' to the next testimonial after a short delay
        setTimeout(() => {
            testimonials[currentIndex].classList.add('active');
        }, 5000); // Adjust delay to smoothen transition

    }
  
    // Set interval to rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
  });
  
  
  








