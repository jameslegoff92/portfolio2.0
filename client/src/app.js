import { setMobileNavControl } from "./js/mobileNavigation.js";
import { createSketch } from "./js/p5.js";

document.addEventListener("DOMContentLoaded", () => {
  let toggle = document.querySelector(".theme-toggle");
  var theme = localStorage.getItem("theme");
  var body = document.querySelector("body");


  // Listen for a change on the toggle
  toggle.addEventListener("change", function () {
    let toggleBoolean = toggle.checked;
    localStorage.setItem("theme", toggleBoolean);
    // If the toggle is on, add the dark class to the body
    theme = localStorage.getItem("theme");

    if (theme === "false") {
      body.classList.replace("dark-theme", "light-theme");
    } else  {
      body.classList.replace("light-theme", "dark-theme");
    }
  });

  new p5(createSketch("logo-canvas"));
  new p5(createSketch("logo-canvas-mobile"));
  setMobileNavControl();
});
