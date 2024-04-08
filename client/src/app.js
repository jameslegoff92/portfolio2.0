import { tagClouds } from "./js/GoogleTag.js"; 
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import { skillsAccordionControl, gridOverlayAnimation } from "./js/gsap.js";

document.addEventListener("DOMContentLoaded", () => {   
  const toggle = document.querySelector(".theme-toggle");

  // Listen for a change on the toggle
  toggle.addEventListener("change", function () {
    // If the toggle is on, add the dark class to the body
    const body = document.body;
    console.log("toggled");
    if (body.classList.contains("dark-theme")) {
      body.classList.replace("dark-theme", "light-theme");
    } else {
      body.classList.replace("light-theme", "dark-theme");
    }
  });

  tagClouds();
  skillsAccordionControl();
  setProjectsLayout();
  gridOverlayAnimation();
  setMobileNavControl();
});
