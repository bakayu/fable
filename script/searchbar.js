document.addEventListener('keydown', function (e) {
    // Check if the "/" key is pressed
    if (e.key === '/') {
        // Get the currently focused element
        const activeElement = document.activeElement;

        // Define tags where we don't want to trigger the search focus
        const excludedTags = ['input', 'textarea', 'select'];
        const isExcluded = excludedTags.includes(activeElement.tagName.toLowerCase()) || activeElement.isContentEditable;

        if (!isExcluded) {
            // Prevent the "/" character from being entered in the current context
            e.preventDefault();

            // Select the search input field
            const searchInput = document.querySelector('.input');

            // Check if the search input exists and is not already focused
            if (searchInput && document.activeElement !== searchInput) {
                searchInput.focus();
            }
        }
    }

    // Check if the "Escape" key is pressed
    if (e.key === 'Escape') {
        // Select the search input field
        const searchInput = document.querySelector('.input');

        // If the search input is currently focused, blur it
        if (searchInput && document.activeElement === searchInput) {
            searchInput.blur();
        }
    }
});