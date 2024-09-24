import { setMobileNavControl } from "./js/mobileNavigation.js";
import { createSketch } from "./js/p5.js";
import { loadThemeFromLocalStorage } from "./theme-control.js";

document.addEventListener("DOMContentLoaded", () => {
  let toggle = document.querySelector(".theme-toggle");

  // Listen for a change on the toggle
  toggle.addEventListener("change", function () {
    //The toggle starts off as false, so if it's checked, set the theme to dark
    let isOn = toggle.checked;
    localStorage.setItem("theme", isOn);
    loadThemeFromLocalStorage();
  });

  new p5(createSketch("logo-canvas"));
  new p5(createSketch("logo-canvas-mobile"));
  setMobileNavControl();
});
