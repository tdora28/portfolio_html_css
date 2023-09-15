const header = document.querySelector("#header");
const backToTopBtn = document.querySelector("#back-to-top");

// Header background-color changes on scroll and mouse events
let timer = null;
window.addEventListener("scroll", () => {
  if (timer !== null) {
    clearTimeout(timer);
    header.style.background = "var(--clr-bg)";
  }
  timer = setTimeout(() => {
    header.style.background = "var(--clr-bg-transparent)";
  }, 400);
});

header.addEventListener("mouseover", () => {
  header.style.background = "var(--clr-bg)";
});

header.addEventListener("mouseout", () => {
  header.style.background = "var(--clr-bg-transparent)";
});

// Back to top functionality
backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
