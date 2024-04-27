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