import gsap from "gsap";

export const skillsAccordionControl = () => {
  let parent = document.querySelectorAll("[data-collapse]");
  parent.forEach((element) => {
    let clickTarget = element.querySelector("*");
    let collapseElement = element.nextElementSibling;
    let collapseElementChildren = collapseElement.children;
    let tl = gsap.timeline({
      reversed: true,
      paused: true,
    });

    tl.from(
      collapseElement,
      {
        height: 0,
        duration: 1.6,
        ease: "expo.inOut",
      },
      "open"
    );
    tl.from(
      collapseElementChildren,
      1,
      {
        autoAlpha: 0,
        y: "40%",
        ease: "expo.inOut",
      },
      0.08,
      "open+=.1"
    );

    clickTarget.addEventListener("click", () => {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });
};

export const mainHeadingAnimation = () => {
  let tl = gsap.timeline({ delay: 6.5});

  tl.from(".section-1 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-2 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-3 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-4 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-5 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from (".nav-container", { opacity: 0, duration: 0.5 });
  tl.from(".intro-gsap", { opacity: 0, duration: 1});

};
