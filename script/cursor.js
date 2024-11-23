document.addEventListener('DOMContentLoaded', () => {
    let lastClientX = 0;
    let lastClientY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isAnimating = false;

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

    // Add a class to the body when hovering over a button or link
    document.querySelectorAll('button, a').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            document.body.classList.add('hovered');
        });
        elem.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovered');
        });
    });
});