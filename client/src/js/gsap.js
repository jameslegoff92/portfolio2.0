import gsap from "gsap";

export const skillsAccordionControl = () => {
  let parent = document.querySelectorAll("[data-collapse]");
  let frontend = document.querySelector(".frontend");
  let backend = document.querySelector(".backend");
  let devops = document.querySelector(".devops");
  let arrow1 = gsap.from(".skill__icon-1", { rotate: "90deg", duration: 0.9, yoyo: true });
  let arrow2 = gsap.from(".skill__icon-2", { rotate: "90deg", duration: 0.9, yoyo: true });
  let arrow3 = gsap.from(".skill__icon-3", { rotate: "90deg", duration: 0.9, yoyo: true });

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

  frontend.addEventListener("click", () => {
    arrow1.reversed() ? arrow1.play() : arrow1.reverse();
  });
  backend.addEventListener("click", () => {
    arrow2.reversed() ? arrow2.play() : arrow2.reverse();
  });
  devops.addEventListener("click", () => {
    arrow3.reversed() ? arrow3.play() : arrow3.reverse();
  });
};

export const mainHeadingAnimation = () => {
  let tl = gsap.timeline({ delay: 6.5 });

  tl.from(".section-1 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-2 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-3 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-4 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".section-5 > span", { opacity: 0, duration: 0.5, stagger: 0.1 });
  tl.from(".nav-container", { opacity: 0, duration: 0.5 });
  tl.from(".intro-gsap", { opacity: 0, duration: 1 });
};

export const gridOverlayAnimation = () => {
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    let overlay = item.children[0];
    let smallBtn1 = overlay.children[0];
    let smallBtn2 = overlay.children[1];


    let tl = gsap.timeline({ paused: true });
    tl.to(overlay, { duration: 0.2, opacity: 1, height: "100%" });
    tl.to([smallBtn1, smallBtn2], { duration: 0.5, opacity: 1 });
    item.addEventListener("mouseenter", () => {
      tl.play();
    });

    item.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  });



};
