import { gsap } from "gsap";
import {
  expandImageRevealAnimation,
  navigationAnimation,
  slideUpAnimation,
} from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  navigationAnimation();
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(slideUpAnimation(".about-h1"), 0)
    .add(expandImageRevealAnimation(".about-img"), 0)
    .add(slideUpAnimation(".stats div"), 0)
    .add(slideUpAnimation(".stats__location"), 0);
});
