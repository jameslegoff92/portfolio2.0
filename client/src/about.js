import { gsap } from "gsap";
import { expandImageRevealAnimation, navigationAnimation, slideUpAnimation } from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(navigationAnimation(), 0)
    .add(slideUpAnimation(".about-h1"), 0)
    .add(expandImageRevealAnimation(".about-img"), 0)
    .add(slideUpAnimation(".stats div"), 0)
    .add(slideUpAnimation(".stats__location"), 0)
});
