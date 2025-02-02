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
  mastertimeline
    .add(navigationAnimation(), 0)
    .add(slideUpAnimation("#main-heading"), 0)
    .add(expandImageRevealAnimation(".projects-grid__img2"), 0)
    .add(revealAnimation(".projects-grid__wrapper2"), 0)
    .add(expandImageRevealAnimation(".projects-grid__img3"), 0)
    .add(revealAnimation(".projects-grid__wrapper3"), 0);

    expandImageRevealAnimationScroll(".projects-grid__img1");
    revealAnimationScroll(".projects-grid__wrapper1");
    expandImageRevealAnimationScroll(".projects-grid__img4");
    revealAnimationScroll(".projects-grid__wrapper4");
    expandImageRevealAnimationScroll(".projects-grid__img5");
    revealAnimationScroll(".projects-grid__wrapper5");
    expandImageRevealAnimationScroll(".projects-grid__img6");
    revealAnimationScroll(".projects-grid__wrapper6");
});