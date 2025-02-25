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
    .add(revealAnimation("#spline-1"), 0)
    .add(slideUpAnimation(".resume-link"), 0)
    .add(revealAnimation("#about-img-1"), 0)
    .add(slideUpAnimation("#section-frontend"), 0)
    .add(revealAnimation("#footer-wrapper"), 0);


   expandImageRevealAnimationScroll("#about-img-2");
   revealAnimationScroll("#section-backend", "75%");
   expandImageRevealAnimationScroll("#about-img-3");
   revealAnimationScroll("#section-devops", "75%");

   const button = document.getElementById('resume-gtag');
   if (button) {
     button.addEventListener('click', function() {
       gtag('event', 'click', {
         event_category: 'button',
         event_label: 'Resume button clicked',
         value: 1
       });
       console.log('Google Analytics event sent: Button Click');
     });
    }
});
