import { gsap } from "gsap";
import { slideUpAnimation, revealAnimation, expandImageRevealAnimation, navigationAnimation } from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  navigationAnimation();
  const mastertimeline = gsap.timeline();
  mastertimeline
    .add(slideUpAnimation("#main-heading"), 0)
    .add(slideUpAnimation("#main-text"), 0)
    .add(slideUpAnimation("#main-content"), 0)
    .add(revealAnimation(".icons__wrapper"), 0)
    .add(revealAnimation("#main-cr"), 0)
    .add(expandImageRevealAnimation(".main-img"), 0);
});
