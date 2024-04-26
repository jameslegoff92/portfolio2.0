import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  let tl1 = gsap.timeline({ delay: 1 });
  let tl2 = gsap.timeline({ delay: 3.5 });
  let tl3 = gsap.timeline({ delay: 5.5 });
  let tl4 = gsap.timeline();
  let tl5 = gsap.timeline();
  let tl6 = gsap.timeline();
  let tl7 = gsap.timeline();

  tl1.fromTo("#logo-canvas", { x: -100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl1.fromTo("#toggle-input", { x: 100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl1.fromTo("#open-mobile-nav", { x: 100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl1.fromTo(
    ".nav__item",
    { x: 100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1, stagger: 0.1 }
  );
  tl1.fromTo("#main-heading", { x: -100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl2.fromTo(".projects-grid__link2", { x: -100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl2.fromTo(
    ".projects-grid__heading2",
    { x: -100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1 }
  );
  tl2.fromTo(".projects-grid__text2", { x: -100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl2.fromTo(
    ".projects-grid__tag2",
    { x: -100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1, stagger: 0.1 }
  );

  tl3.fromTo(
    ".projects-grid__link3",
    { x: 100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1 },
    "after-main-heading"
  );
  tl3.fromTo(
    ".projects-grid__heading3",
    { x: 100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1 }
  );
  tl3.fromTo(".projects-grid__text3", { x: 100, opacity: 0, duration: 0.3 }, { ease: "power2.out", x: 0, opacity: 1 });
  tl3.fromTo(
    ".projects-grid__tag3",
    { x: 100, opacity: 0, duration: 0.3 },
    { ease: "power2.out", x: 0, opacity: 1, stagger: 0.1 }
  );

  tl4.fromTo(
    ".projects-grid__img1",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,

      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img1", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl4.fromTo(
    ".projects-grid__heading1",
    {
      // Starting properties
      opacity: 0,
      scale: 2,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img1", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl4.fromTo(
    ".projects-grid__text1",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img1", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl4.fromTo(
    ".projects-grid__tag1",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img1", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );





// T15
  tl5.fromTo(
    ".projects-grid__img4",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,

      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img4", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl5.fromTo(
    ".projects-grid__heading4",
    {
      // Starting properties
      opacity: 0,
      scale: 2,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img4", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl5.fromTo(
    ".projects-grid__text4",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img4", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );
  tl5.fromTo(
    ".projects-grid__tag4",
    {
      // Starting properties
      scale: 2,
      opacity: 0,
      x: -600,
    },
    {
      // Ending properties
      opacity: 1,
      x: 0,
      scale: 1,
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: ".projects-grid__img4", // Element that triggers the animation
        start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
        end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
        scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
        // Optional: markers to see the start and end points during development
        markers: true,
      },
    }
  );



// T16
tl6.fromTo(
  ".projects-grid__img5",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,

    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img5", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);
tl6.fromTo(
  ".projects-grid__heading5",
  {
    // Starting properties
    opacity: 0,
    scale: 2,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img5", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);
tl6.fromTo(
  ".projects-grid__text5",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img5", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);

tl6.fromTo(
  ".projects-grid__tag5",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img5", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);


// T17
tl7.fromTo(
  ".projects-grid__img6",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,

    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img6", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);
tl7.fromTo(
  ".projects-grid__heading6",
  {
    // Starting properties
    opacity: 0,
    scale: 2,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img6", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);
tl7.fromTo(
  ".projects-grid__text6",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img6", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);

tl7.fromTo(
  ".projects-grid__tag6",
  {
    // Starting properties
    scale: 2,
    opacity: 0,
    x: -600,
  },
  {
    // Ending properties
    opacity: 1,
    x: 0,
    scale: 1,
    // ScrollTrigger configuration
    scrollTrigger: {
      trigger: ".projects-grid__img6", // Element that triggers the animation
      start: "top 30%", // When the top of ".box-3" hits the 75% viewport height
      end: "center 50%", // When the bottom of ".box-3" hits the 25% viewport height
      scrub: true, // Smooth scrubbing, tying the animation progress to the scroll position
      // Optional: markers to see the start and end points during development
      markers: true,
    },
  }
);








































});
