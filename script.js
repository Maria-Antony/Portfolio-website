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
    const timelineItems = document.querySelectorAll(".timeline-item");

    function animateTimelineItems() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", animateTimelineItems);
    animateTimelineItems(); // Run on load in case items are already in view
});



