import gsap from "gsap";
document.addEventListener("DOMContentLoaded", () => {
  let tl1 = gsap.timeline({ delay: 1 });

  tl1.from("body", { autoAlpha: 0,});
  tl1.fromTo("#logo-canvas", { x: -100, visibility: "hidden",  }, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1});
  tl1.fromTo("#toggle-input", { x: 100, visibility: "hidden",  }, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1 });
  tl1.fromTo("#open-mobile-nav", { x: 100, visibility: "hidden",  }, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1 }, "-=0.5");
  tl1.fromTo(
    ".nav__item",
    { x: 100, visibility: "hidden",  },
    { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1, stagger: 0.17 }
  );
  tl1.fromTo(".about-h1", { x: -100, visibility: "hidden" }, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1 });
  tl1.fromTo(".about-img", { x: 200, visibility: "hidden" }, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1 });
  tl1.fromTo(".stats div", { y: 200, visibility: "hidden" }, { duration: 0.5, ease: "power2.out", y: 0, autoAlpha: 1, stagger: 0.17});  
  tl1.fromTo(".stats__location", { y: 200, visibility: "hidden" }, { duration: 0.5, ease: "power2.out", y: 0, autoAlpha: 1, stagger: 0.17});  
});