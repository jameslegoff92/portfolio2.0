import { gsap } from "gsap";
import {
  expandImageRevealAnimation,
  navigationAnimation,
  revealAnimation,
  slideUpAnimation,
} from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  navigationAnimation();
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(slideUpAnimation(".about-h1"), 0)
    .add(expandImageRevealAnimation(".about-img"), 0)
    .add(slideUpAnimation("#stats-wrapper"), 0)
    .add(slideUpAnimation(".stats__location"), 0)
    .add(revealAnimation("#gallery-wrapper"), 0)
    .add(revealAnimation("#about-wrapper"), 0)
    .add(revealAnimation("#skills-wrapper"), 0)
    .add(revealAnimation("#footer-wrapper"), 0);
});
