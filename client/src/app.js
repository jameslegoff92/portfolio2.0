import { setMobileNavControl } from "./js/mobileNavigation.js";

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

  setMobileNavControl();
});