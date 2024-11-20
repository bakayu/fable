document.addEventListener('DOMContentLoaded', (event) => {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const buttons = document.querySelectorAll(".m-button");
    const closeButtons = document.querySelectorAll(".close");
    const createAccountLink = document.getElementById("createAccountLink");
    const signInLink = document.getElementById("signInLink");
    const joinFableLink = document.querySelector(".menu a.join-fable");
    const navSignInLink = document.querySelector(".menu a.sign-in-link");
    const sidebarLoginLink = document.getElementById("sidebarLoginLink");
    const sidebarSignupLink = document.getElementById("sidebarSignupLink");
    const sidebar = document.getElementById('sidebar');
    const moreButton = document.querySelector('.m-button');
    const closeButton = document.querySelector('.close-sidebar');
    const header = document.querySelector('.home-header');

    // Handle scroll event to detach the nav bar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('fixed-nav');
        } else {
            header.classList.remove('fixed-nav');
        }
    });

    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
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
                document.body.classList.remove('no-scroll');
            }
        }
    });

    // Prevent closing sidebar when clicking inside it
    sidebar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Handle sidebar login and sign-up links
    sidebarLoginLink.onclick = function (event) {
        event.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "block";
        toggleSidebar(); // Close the sidebar
    }

    sidebarSignupLink.onclick = function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "block";
        toggleSidebar(); // Close the sidebar
    }

    closeButtons.forEach(button => {
        button.onclick = function () {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    });

    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        } else if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    }

    createAccountLink.onclick = function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    }

    signInLink.onclick = function (event) {
        event.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "block";
    }

    joinFableLink.onclick = function (event) {
        event.preventDefault();
        signupModal.style.display = "block";
    }

    navSignInLink.onclick = function (event) {
        event.preventDefault();
        loginModal.style.display = "block";
    }
});