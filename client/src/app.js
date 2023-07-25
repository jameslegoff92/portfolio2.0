import { tagClouds } from "./js/GoogleTag.js";
import { removeLoadingAnimation } from "./js/animations.js";
import { setProjectsLayout } from "./js/masonry.js";
import { setMobileNavControl } from "./js/mobileNavigation.js";
import { skillsAccordionControl, mainHeadingAnimation, gridOverlayAnimation } from "./js/gsap.js";

setMobileNavControl();
removeLoadingAnimation();
mainHeadingAnimation();
tagClouds();
skillsAccordionControl();
setProjectsLayout();
gridOverlayAnimation();