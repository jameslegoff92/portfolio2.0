import { gsap } from "gsap";
import { navigationAnimation } from "./js/gsap";

document.addEventListener("DOMContentLoaded", () => {
  let tl1 = gsap.timeline();

  navigationAnimation();
  tl1.fromTo(
    "#main-heading",
    { x: 100, visibility: "hidden",  },
    { ease: "power2.out", x: 0, autoAlpha: 1 }
  );
  tl1.fromTo(
    "#main-text",
    { x: 100, visibility: "hidden", },
    { ease: "power2.out", x: 0, autoAlpha: 1 }
  );
  tl1.fromTo(
    "#main-content",
    { x: 100, visibility: "hidden", },
    { ease: "power2.out", x: 0, autoAlpha: 1 }
  );
  tl1.fromTo(
    ".icons__wrapper",
    { x: 100, visibility: "hidden",  },
    { ease: "power2.out", x: 0, autoAlpha: 1 }
  );
  tl1.fromTo(
    "#main-cr",
    { x: 100, visibility: "hidden",  },
    { ease: "power2.out", x: 0, autoAlpha: 1 }
  );
  tl1.fromTo(
    ".main-img",
    { visibility: "hidden" },
    { ease: "power2.out", autoAlpha: 1, }, "-=2"
  );
});