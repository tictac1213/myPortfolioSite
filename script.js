// Add this to your existing script.js file or within a <script> tag in your HTML
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
  
    menuToggle.addEventListener('click', function () {
      mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'flex';
    });
  
    // Close the mobile menu when a link is clicked
    mobileNav.addEventListener('click', function () {
      mobileNav.style.display = 'none';
    });
  });
  