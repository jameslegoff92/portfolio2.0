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

export function animationBounce(item) {
  const element = document.querySelector(item);  

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.2,              // Scale up to 1.2x
      duration: 0.5,           // Slightly longer duration for bounce effect
      ease: "bounce.out"       // Add bounce effect on scaling up
    });
    
    // Add a shake effect
    gsap.to(element, {
      x: -5,                   // Move slightly left
      repeat: 5,               // Repeat the shake a few times
      yoyo: true,              // Return to original position on each repeat
      duration: 0.1,
      ease: "power1.inOut"
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