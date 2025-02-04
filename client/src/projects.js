import { gsap } from "gsap";
import {
  navigationAnimation,
  slideUpAnimation,
  expandImageRevealAnimation,
  expandImageRevealAnimationScroll,
  revealAnimation,
  revealAnimationScroll
} from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  let mastertimeline = gsap.timeline();
  navigationAnimation();
  mastertimeline
    .add(slideUpAnimation("#main-heading"), 0)
    .add(expandImageRevealAnimation(".projects-grid__img7"), 0)
    .add(revealAnimation(".projects-grid__wrapper7"), 0)

    expandImageRevealAnimationScroll(".projects-grid__img2");
    revealAnimationScroll(".projects-grid__wrapper2");
    expandImageRevealAnimationScroll(".projects-grid__img3");
    revealAnimationScroll(".projects-grid__wrapper3");
    expandImageRevealAnimationScroll(".projects-grid__img1");
    revealAnimationScroll(".projects-grid__wrapper1");
    expandImageRevealAnimationScroll(".projects-grid__img7");
    revealAnimationScroll(".projects-grid__wrapper7");
    expandImageRevealAnimationScroll(".projects-grid__img4");
    revealAnimationScroll(".projects-grid__wrapper4");
    expandImageRevealAnimationScroll(".projects-grid__img5");
    revealAnimationScroll(".projects-grid__wrapper5");
    expandImageRevealAnimationScroll(".projects-grid__img6");
    revealAnimationScroll(".projects-grid__wrapper6");
});