// navbar toggling
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");

navbarShowBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.add("navbar-show");
});
navbarHideBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.remove("navbar-show");
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Function to handle smooth scrolling
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
}

// Add event listener to Learn More buttons
const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
learnMoreButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute("href"));
  });
});

// Add event listener to Our Services button
const ourServicesButton = document.querySelector(".our-services-btn");
ourServicesButton.addEventListener("click", function (e) {
  e.preventDefault();
  smoothScroll(this.getAttribute("href"));
});

// Add event listener to Contact Us buttons
const contactUsButtons = document.querySelectorAll(".contact-us-btn");
contactUsButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute("href"));
  });
});

// changing search icon image on window resize
window.addEventListener("resize", changeSearchIcon);
function changeSearchIcon() {
  let winSize = window.matchMedia("(min-width: 1000px)");
  if (winSize.matches) {
    document.querySelector(".search-icon img").src = "images/search-icon.png";
  } else {
    document.querySelector(".search-icon img").src =
      "images/search-icon-dark.png";
  }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
Window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
