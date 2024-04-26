import gsap from "gsap";

//Controls the animation for the heading and navigation fading into the UI.
export const mainHeadingAnimation = () => {
  let tl = gsap.timeline({ delay: 1});
  tl.from(".section-1 > span", { opacity: 0, duration: 0.7, stagger: 0.1,});
  tl.from(".section-2 > span", { opacity: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-3 > span", { opacity: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-4 > span", { opacity: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".section-5 > span", { opacity: 0, duration: 0.7, stagger: 0.1 });
  tl.from(".nav-container--secondary", { opacity: 0, duration: 1 });
};