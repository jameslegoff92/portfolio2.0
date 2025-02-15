import { gsap } from "gsap";
import {
  navigationAnimation,
  revealAnimation,
  slideUpAnimation,
} from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  navigationAnimation();
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(slideUpAnimation(".about-h1"), 0)
    .add(revealAnimation("#footer-wrapper"), 0);
});
