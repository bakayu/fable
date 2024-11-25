document.addEventListener('DOMContentLoaded', (event) => {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const buttons = document.querySelectorAll(".m-button");
    const closeButtons = document.querySelectorAll(".close");
    const createAccountLink = document.getElementById("createAccountLink");
    const signInLink = document.getElementById("signInLink");
    const sidebarSignoutLink = document.getElementById("sidebarSignoutLink");
    const sidebar = document.getElementById('sidebar');
    const moreButton = document.querySelector('.m-button');
    const closeButton = document.querySelector('.close-sidebar');
    const header = document.querySelector('.home-header');


    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        // document.body.classList.toggle('no-scroll');
    }

    moreButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering other click events
        toggleSidebar();
    });

    closeButton.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !moreButton.contains(event.target)) {
            if (sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                // document.body.classList.remove('no-scroll');
            }
        }
    });

    // Function to open login modal
    function openLoginModal(event) {
        event.preventDefault();
        loginModal.style.display = "block";
        // Close the sidebar if it's open
        if (sidebar.classList.contains('show')) {
            toggleSidebar();
        }
    }

    // Function to open signup modal
    function openSignupModal(event) {
        event.preventDefault();
        signupModal.style.display = "block";
        // Close the sidebar if it's open
        if (sidebar.classList.contains('show')) {
            toggleSidebar();
        }
    }

    // Event listeners for modal close buttons
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        });
    });

    // Event listeners for create account and sign in links in modals
    if (createAccountLink) {
        createAccountLink.addEventListener('click', (event) => {
            event.preventDefault();
            loginModal.style.display = "none";
            signupModal.style.display = "block";
        });
    }

    if (signInLink) {
        signInLink.addEventListener('click', (event) => {
            event.preventDefault();
            signupModal.style.display = "none";
            loginModal.style.display = "block";
        });
    }

    // Close modals when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    });

    window.addEventListener('load', function () {
        // Check if coming from login
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            // Clear the login state
            sessionStorage.removeItem('isLoggedIn');
        }
    });
});