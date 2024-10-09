import gsap from "gsap";

//Controls the animation for the heading and navigation fading into the UI.
export const mainHeadingAnimation = () => {
  let tl = gsap.timeline({ delay: 1});
  tl.from("body", { autoAlpha: 0 });
  tl.from(".section-1 > span", { autoAlpha: 0, duration: 0.7, stagger: 0.1,});
  tl.from(".section-2 > span", { autoAlpha: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-3 > span", { autoAlpha: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-4 > span", { autoAlpha: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-5 > span", { autoAlpha: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".nav-container--secondary", { opacity: 0, duration: 1 });
};

export function animationScale(item = null) {
  const element = document.querySelector(item);  

  if (!element) {
    return console.warn(`No element found with the selector: ${item}`);
  }

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.5,              // Scale up to 1.2x
      duration: 1,           // Slightly longer duration for bounce effect
      ease: "bounce.out"       // Add bounce effect on scaling up
    });
  });

  // Mouse leave: Reset scale and stop shake
  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,                // Return to original size
      x: 0,                    // Stop any horizontal movement
      duration: 0.3,
      ease: "power2.out"
    });
  });
} 