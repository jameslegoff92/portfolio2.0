import { tagClouds } from "./js/GoogleTag.js";
import { removeLoadingAnimation } from "./js/animations.js";
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import { skillsAccordionControl, mainHeadingAnimation, gridOverlayAnimation } from "./js/gsap.js";

setMobileNavControl();
// removeLoadingAnimation();
// mainHeadingAnimation();
tagClouds();
skillsAccordionControl();
setProjectsLayout();
gridOverlayAnimation();



document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  
  // Listen for a change on the toggle
  toggle.addEventListener("change", function () {
    // If the toggle is on, add the dark class to the body
    const body = document.body;
    console.log('toggled');
    if (body.classList.contains("dark-theme")) {
      body.classList.replace('dark-theme', 'light-theme');
    } else {
      body.classList.replace('light-theme', 'dark-theme');
    }
  });
});
