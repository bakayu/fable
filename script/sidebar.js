// document.addEventListener('DOMContentLoaded', (event) => {
//     const header = document.querySelector('.home-header');
//     const sidebar = document.getElementById('sidebar');

//     // Handle scroll event to detach the nav bar
//     window.addEventListener('scroll', () => {
//         console.log('ScrollY:', window.scrollY); // Debugging line
//         if (window.scrollY > 50) {
//             header.classList.add('fixed-nav');
//             console.log('Added fixed-nav class');
//         } else {
//             header.classList.remove('fixed-nav');
//             console.log('Removed fixed-nav class');
//         }
//     });

//     // Toggle sidebar
//     window.toggleSidebar = function() {
//         sidebar.classList.toggle('show');
//     }
// });