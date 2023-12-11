const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle the mobile menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// Close the mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Change background header on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 200) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});

// Show scroll-to-top button
window.addEventListener('scroll', () => {
  const scrollTop = document.getElementById('scroll-top');
  if (window.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
});

