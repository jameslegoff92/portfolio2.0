import { setMobileNavControl } from "./js/mobileNavigation.js";
import { createSketch } from "./js/p5.js";
import { loadThemeFromLocalStorage } from "./theme-control.js";
import { animationScale } from "./js/gsap.js";
import gsap from "gsap";

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
  animationScale("#toggle-input"); 

  let lang = document.querySelector(".lang");
  let langWrapper = document.querySelector(".lang-wrapper");
  let chevronIcon = document.querySelector(".lang-container__icon");

  lang.addEventListener("mouseenter", (e) => {
    langWrapper.classList.remove("u-hidden");
    langWrapper.classList.remove("animate-out");
    langWrapper.classList.add("animate-in");
    chevronIcon.classList.remove("return-counter");
    chevronIcon.classList.add("rotate-counter");  
  });

  lang.addEventListener("mouseleave", (e) => {
    langWrapper.classList.add("u-hidden");
    langWrapper.classList.remove("animate-in");
    langWrapper.classList.add("animate-out");
    chevronIcon.classList.remove("rotate-counter");
    chevronIcon.classList.add("return-counter");
  });
});
