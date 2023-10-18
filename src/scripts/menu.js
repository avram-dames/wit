document.getElementById("hamburger").addEventListener("click", () => {
  document
    .getElementById("hamburger-middle-line")
    .classList.toggle("-translate-x-1.5");
  document.querySelector(".nav-links").classList.toggle("w-0");
  document.querySelector(".nav-links").classList.toggle("w-full");
  document.querySelector(".nav-links").classList.toggle("-translate-x-full");
});
