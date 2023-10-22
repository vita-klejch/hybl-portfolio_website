// SCROLL set up
// location on page - for scrolling to SECTION
const locationPortfolio = document.querySelector(".js-portfolio");
const locationContact = document.querySelector(".js-contact");
const locationReference = document.querySelector(".js-reference");

// CLICK on NAV BTN triggers scrolling to SECTION
const navButtons = document.querySelectorAll<HTMLElement>("[data-scrollTo]");
navButtons.forEach((btn) => {
  const selector = btn.dataset.scrollto;
  btn.addEventListener("click", () => {
    document
      .querySelector(`.${selector}`)
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

// REDIR set up
// test if page view should be scrolled somewhere
//   - search in URL for variable "redir"
//   - it is used when page is open by external page
const searchData = window.location.search;
const urlVar = new URLSearchParams(searchData);
const redirValue = urlVar.get("redir");

// scrolling to location set by redir value
redirValue == "contact" && locationContact?.scrollIntoView();
redirValue == "portfolio" && locationPortfolio?.scrollIntoView();
redirValue == "reference" && locationReference?.scrollIntoView();

// CAROUSEL set up
const slides = document.querySelectorAll<HTMLElement>(".carousel__slide");
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentSlide = 0;
const lastSlide = slides.length - 1;

const moveCarousel = () => {
  if (currentSlide == lastSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
};

// sets automatic carousel - change img after 4 seconds
// document.addEventListener("click", moveCarousel);
setInterval(moveCarousel, 4000);

console.log("test");
