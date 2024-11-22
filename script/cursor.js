// JS for cursor effect

let mouseX = 0;
let mouseY = 0;
let isAnimating = false;

// Store the last known mouse positions
let lastClientX = 0;
let lastClientY = 0;

// Mousemove event to update mouseX and mouseY
document.addEventListener('mousemove', (e) => {
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    mouseX = e.clientX + window.scrollX;
    mouseY = e.clientY + window.scrollY;
    requestUpdate();
});

// Scroll event to update mouseY based on scroll position
window.addEventListener('scroll', () => {
    mouseX = lastClientX + window.scrollX;
    mouseY = lastClientY + window.scrollY;
    requestUpdate();
});

// Function to request an animation frame update
function requestUpdate() {
    if (!isAnimating) {
        requestAnimationFrame(updateCursor);
        isAnimating = true;
    }
}

// Update the CSS variables with the latest mouse positions
function updateCursor() {
    document.body.style.setProperty('--mouse-x', `${mouseX}px`);
    document.body.style.setProperty('--mouse-y', `${mouseY}px`);
    isAnimating = false;
}