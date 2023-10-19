// BURGER MENU SETUP
const burgerIcon = document.querySelector(".js-burger-nav");
const navElement = document.querySelector(".nav");

burgerIcon?.addEventListener("click", (e) => {
  navElement?.classList.toggle("nav--active");
  e.stopPropagation();
});

// CLOSE NAV MENU when clicking somewhere on page
window.addEventListener("click", () => {
  navElement?.classList.remove("nav--active");
});
