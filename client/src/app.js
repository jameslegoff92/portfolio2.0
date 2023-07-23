import { tagClouds } from "./js/GoogleTag.js";
import { removeLoadingAnimation } from "./js/animations.js";
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import { skillsAccordionControl } from "./js/gsap.js";
import { formSubmit } from "./js/forms.js";

setMobileNavControl();
removeLoadingAnimation();
tagClouds();
skillsAccordionControl();
setProjectsLayout();

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  formSubmit(event);
});