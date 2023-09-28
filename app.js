const header = document.querySelector('#header');
const backToTopBtn = document.querySelector('#back-to-top');
const openMenuBtn = document.querySelector('#openMobileMenuBtn');
const closeMenuBtn = document.querySelector('#closeMobileMenuBtn');
const navLinks = document.querySelectorAll('.nav a');

// Header background-color changes on scroll and mouse events
let timer = null;
window.addEventListener('scroll', () => {
  // Cancel for small screens
  if (window.innerWidth < 501) {
    return;
  }
  // Make background solid for a short time on scroll
  if (timer !== null) {
    clearTimeout(timer);
    header.style.background = 'var(--clr-bg)';
  }
  timer = setTimeout(() => {
    header.style.background = 'var(--clr-bg-transparent)';
  }, 400);
});

header.addEventListener('mouseover', () => {
  // Cancel for small screens
  if (window.innerWidth < 501) {
    return;
  }
  header.style.background = 'var(--clr-bg)';
});

header.addEventListener('mouseout', () => {
  // Cancel for small screens
  if (window.innerWidth < 501) {
    return;
  }
  header.style.background = 'var(--clr-bg-transparent)';
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Mobile menu
const openMenu = () => {
  openMenuBtn.classList.add('hidden');
  header.classList.add('visible');
};

const closeMenu = () => {
  openMenuBtn.classList.remove('hidden');
  header.classList.remove('visible');
  header.style.backgroundColor = 'white';
};

openMenuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
