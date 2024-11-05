document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully');
});
// Function to reveal timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
}

// Listen for scroll events to trigger the reveal
window.addEventListener('scroll', revealTimeline);
