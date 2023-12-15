
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
  
    menuToggle.addEventListener('click', function () {
      mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'flex';
    });
  
    
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
    }, { threshold: 0.2 }); 

    
    var elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function (element) {
        observer.observe(element);
    });
});


let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  const menuBar = document.querySelector("header");


  if (prevScrollPos > currentScrollPos) {
    menuBar.style.top = "0px";
    
  } else {
   
    menuBar.style.top = "auto"; 

  }

  prevScrollPos = currentScrollPos;
};
