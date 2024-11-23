console.log("hello world");
document.addEventListener('DOMContentLoaded', (event) => {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const buttons = document.querySelectorAll(".m-button");
    const closeButtons = document.querySelectorAll(".close");
    const createAccountLink = document.getElementById("createAccountLink");
    const signInLink = document.getElementById("signInLink");
    const joinFableLink = document.querySelector(".menu a.join-fable");
    const navSignInLink = document.querySelector(".menu a.sign-in-link");

    buttons.forEach(button => {
        button.onclick = function () {
            signupModal.style.display = "block";
        }
    });

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

    document.querySelector('.sign-up-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading overlay
        document.getElementById('loadingOverlay').style.display = 'flex';

        // Simulate loading time (remove this in production)
        setTimeout(() => {
            // Store login state if needed
            sessionStorage.setItem('isLoggedIn', 'true');

            // Redirect to home page
            window.location.href = 'pages/home.html';
        }, 2000); // 2 second delay for demo
    });

    document.querySelector('.sign-in-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading overlay
        document.getElementById('loadingOverlay').style.display = 'flex';

        // Simulate loading time (remove this in production)
        setTimeout(() => {
            // Store login state if needed
            sessionStorage.setItem('isLoggedIn', 'true');

            // Redirect to home page
            window.location.href = 'pages/home.html';
        }, 2090); // add delay
    });
});