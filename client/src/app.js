import { setMobileNavControl } from "./js/mobileNavigation.js";
import { loadThemeFromLocalStorage } from "./theme-control.js";
import { animationScale } from "./js/gsap.js";

document.addEventListener("DOMContentLoaded", () => {
  let toggle = document.querySelector(".theme-toggle");

  // Listen for a change on the toggle
  toggle.addEventListener("change", function () {
    //The toggle starts off as false, so if it's checked, set the theme to dark
    let isOn = toggle.checked;
    localStorage.setItem("theme", isOn);
    loadThemeFromLocalStorage();
  });

  setMobileNavControl();
  animationScale("#toggle-input");

  //Refactor the code below - All this is related to the Language Switching Component
  let lang = document.querySelector(".lang");
  let langWrapper = document.querySelector(".lang-wrapper");
  let chevronIcon = document.querySelector(".lang-container__icon");
  let currentLang = document.querySelector("#current-lang");
  let altLang = document.querySelector("#alt-lang");
  let langIcon = document.querySelector(".lang-modal__icon");

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

  const urlParams = window.location.search;
  localStorage.setItem("lang", urlParams);
  var langSetting = localStorage.getItem("lang");

  if (langSetting === null || langSetting === undefined) {
  } else if (langSetting === "?lng=fr") {
    currentLang.textContent = "Français";
    currentLang.href = "?lng=fr";
    altLang.innerHTML =
      '<img class="lang-modal__icon" src="/assets/canada-icon.png" alt="flag of Canda"> Anglais';
    altLang.href = "?lng=en";
    console.log("lang icon: ", langIcon);
    langIcon.src = "/assets/canada-icon.png";
  } else if (langSetting === "?lng=en") {
    currentLang.textContent = "English";
    currentLang.href = "?lng=en";
    altLang.innerHTML =
      '<img class="lang-modal__icon" src="/assets/france-icon.png" alt="flag of Canda"> French';
    altLang.href = "?lng=fr";
    langIcon.src = "/assets/france-icon.png";
  }

  // Create a div element for the custom cursor
  const cursor = document.createElement("div");
  cursor.id = "custom-cursor";
  document.body.appendChild(cursor);
  const targetArea = document
    .querySelectorAll(".projects-grid__link")
    .forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.style.display = "block";
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
      });
    });

  // Update cursor position on mouse move
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    console.log(e.clientY); 
    cursor.style.top = `${e.pageY}px`;
    console.log(e.clientY);
  });
});
