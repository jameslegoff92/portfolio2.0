import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSessionKey, setSessionKey } from "./utils/storageAPI.js";

//Controls the animation for the heading and navigation fading into the UI.
export const mainHeadingAnimation = () => {
  const hasAnimated = getSessionKey("hasAnimated");
  if (hasAnimated === "true") {
    return;
  }

  let tl = gsap.timeline({ delay: 1 });
  tl.fromTo("body", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 });
  tl.fromTo(
    ".section-1 > span",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
  );
  tl.fromTo(
    ".section-2 > span",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
  );
  tl.fromTo(
    ".section-3 > span",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
  );
  tl.fromTo(
    ".section-4 > span",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
  );
  tl.fromTo(
    ".section-5 > span",
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
  );
  tl.fromTo(
    "#toggle-input",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out" }
  );
  tl.fromTo(
    "#mainnav > li",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out", stagger: 0.1 },
    "-=0.1"
  );
  tl.fromTo(
    "#langid",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out" },
    "-=0.1"
  );

  setSessionKey("hasAnimated", "true");
};

export function animationScale(item = null) {
  const element = document.querySelector(item);

  if (!element) {
    return console.warn(`No element found with the selector: ${item}`);
  }

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.5, // Scale up to 1.2x
      duration: 0.5, // Slightly longer duration for bounce effect
      ease: "bounce.out", // Add bounce effect on scaling up
    });
  });

  // Mouse leave: Reset scale and stop shake
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1, // Return to original size
      x: 0, // Stop any horizontal movement
      duration: 0.3,
      ease: "power2.out",
    });
  });
}

export const navigationAnimation = () => {
  const hasAnimated = getSessionKey("hasAnimated");
  if (hasAnimated === "true") {
    return;
  }

  let tl = gsap.timeline();
  tl.fromTo(
    "#toggle-input",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out" }
  );
  tl.fromTo(
    "#mainnav > li",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out", stagger: 0.1 },
    "-=0.1"
  );
  tl.fromTo(
    "#langid",
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, duration: 0.2, y: 0, ease: "power2.out" },
    "-=0.1"
  );
  tl.fromTo(
    "#open-mobile-nav",
    { autoAlpha: 0, y: 20 },
    { duration: 0.2, ease: "power2.out", y: 0, autoAlpha: 1 },
    "-=0.1"
  );

  setSessionKey("hasAnimated", "true");
};

export const slideUpAnimation = (element) => {
  if (!element) {
    return console.warn("Provide a string selector for the element to animate");
  }

  gsap.fromTo(
    element,
    { autoAlpha: 0, y: 100 },
    { autoAlpha: 1, duration: 1, y: 0, ease: "power2.out" }
  );
};

export const expandImageRevealAnimation = (element) => {
  if (!element) {
    return console.warn("Provide a string selector for the element to animate");
  }

  gsap.fromTo(
    element,
    { autoAlpha: 0, scale: 0.5 },
    { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" }
  );
};

export const expandImageRevealAnimationScroll = (element) => {
  if (!element) {
    return console.warn("Provide a string selector for the element to animate");
  }
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    element,
    { autoAlpha: 0, scale: 0.5 },
    { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: element, // Element that triggers the animation
        start: "top 95%", // When the top of ".box-3" hits the 75% viewport height
        // markers: true,
        toggleActions: "play none none none",
      },
    }
  );
};

export const revealAnimation = (element) => {
  if (!element) {
    return console.warn("Provide a string selector for the element to animate");
  }

  gsap.fromTo(
    element,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 2, ease: "power2.out" }
  );
};

export const revealAnimationScroll = (element) => {
  if (!element) {
    return console.warn("Provide a string selector for the element to animate");
  }
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    element,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1, ease: "power2.out",
      scrollTrigger: {
        trigger: element, // Element that triggers the animation
        start: "top 95%", // When the top of ".box-3" hits the 75% viewport height
        // markers: true,
        toggleActions: "play none none none",
      },
    }
  );
};