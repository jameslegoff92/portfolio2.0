import { gsap } from "gsap";
import {
  navigationAnimation,
  revealAnimation,
  slideUpAnimation,
  expandImageRevealAnimationScroll,
  revealAnimationScroll,
} from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  navigationAnimation();
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(slideUpAnimation(".about-h1"), 0)
    .add(slideUpAnimation(".about-text"), 0)
    .add(revealAnimation("#footer-wrapper"), 0)
    .add(revealAnimation("#about-img-1"), 0)
    .add(slideUpAnimation("#section-frontend"));

   expandImageRevealAnimationScroll("#about-img-2");
   revealAnimationScroll("#section-backend");
   expandImageRevealAnimationScroll("#about-img-3");
   revealAnimation("#section-devops");
});
