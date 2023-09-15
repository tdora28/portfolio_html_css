const header = document.querySelector("#header");

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
