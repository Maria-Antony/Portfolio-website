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
    const educationSection = document.getElementById("education");
    const timeline = document.querySelector(".timeline");

    function animateTimeline() {
        const rect = educationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            timeline.classList.add("visible");
        }
    }

    window.addEventListener("scroll", animateTimeline);
    animateTimeline(); // Run on load in case the section is already in view
});



