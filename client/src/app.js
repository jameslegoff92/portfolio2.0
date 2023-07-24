import { tagClouds } from "./js/GoogleTag.js";
import { removeLoadingAnimation } from "./js/animations.js";
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import { skillsAccordionControl } from "./js/gsap.js";
import { mainHeadingAnimation } from "./js/gsap.js";

setMobileNavControl();
removeLoadingAnimation();
mainHeadingAnimation();
tagClouds();
skillsAccordionControl();
setProjectsLayout();