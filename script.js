
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
  

  document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // You can adjust the threshold as needed

    // Target elements with the class 'animate-on-scroll'
    var elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function (element) {
        observer.observe(element);
    });
});




