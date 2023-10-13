const header = document.querySelector("#header");
const backToTopBtn = document.querySelector("#back-to-top");
const openMenuBtn = document.querySelector("#openMobileMenuBtn");
const closeMenuBtn = document.querySelector("#closeMobileMenuBtn");
const navLinks = document.querySelectorAll(".nav a");

backToTopBtn.style.display = "none";

window.onscroll = function () {
  scrollFunction();
};

// Header background-color changes on scroll and mouse events
// Toggling bakc-to-top btn display
// Code from W3S
const scrollFunction = () => {
  // Hiding back to top btn on scroll
  backToTopBtn.style.display = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? "flex" : "none";

  // Show header bg on scroll
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? header.classList.add("background") : header.classList.remove("background");
};

// Back to top functionality
backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Mobile menu
const openMenu = () => {
  openMenuBtn.classList.add("hidden");
  header.classList.add("visible");
};

const closeMenu = () => {
  openMenuBtn.classList.remove("hidden");
  header.classList.remove("visible");
};

openMenuBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
