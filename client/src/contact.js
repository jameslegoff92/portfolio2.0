import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  let tl1 = gsap.timeline({ delay: 1 });

  tl1.from("body", { autoAlpha: 0,});
  tl1.fromTo("#logo-canvas", { x: -200, visibility:"hidden"}, { duration: 0.5, ease: "power2.out", x: 0, autoAlpha: 1,  });
  tl1.fromTo("#toggle-input", { x: 100, visibility:"hidden",  }, { ease: "power2.out", x: 0, autoAlpha: 1, duration: 0.5 });
  tl1.fromTo("#open-mobile-nav", { x: 100, visibility:"hidden"  }, { ease: "power2.out", x: 0, autoAlpha: 1, duration: 0.5 }, "-=0.5");
  tl1.fromTo(".nav__item", { x: 100, visibility:"hidden"  }, { ease: "power2.out", x: 0, autoAlpha: 1, stagger: 0.17, duration: 0.5 });
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
    { scale: 4, x: 100, visibility: "hidden" },
    { ease: "power2.out", x: 0, autoAlpha: 1, scale: 1 }
  );
});