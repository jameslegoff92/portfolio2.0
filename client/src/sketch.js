// import { removeLoadingAnimation } from "./js/animations.js";
// import { mainHeadingAnimation } from "./js/gsap.js";

// // removeLoadingAnimation();
// // mainHeadingAnimation(); 
console.log("hi");

// const s = p => {
//   let x = 100;
//   let y = 100;

//   p.setup = function() {
//     p.createCanvas(700, 410);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x, y, 50, 50);
//   };
// };

// new p5(s); 
// Define a new p5 instance
const mySketch = (p) => {
  // Setup function
  p.setup = () => {
    p.createCanvas(65, 65, p.WEBGL).parent("logo-canvas");
  };

  // Draw function
  p.draw = () => {
    p.background(0);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);

    // Colors
    let colors = [
      [221, 160, 145], // Skin
      [229, 227, 126], // Light Yellow
      [234, 79, 32], // Orange
    ];

    // This will ensure each face is drawn with one of the three colors
    for (let i = 0; i < 6; i++) {
      p.push(); // Start a new drawing state
      if (i < 3) {
        p.fill(...colors[i]);
      } else {
        p.fill(...colors[i - 3]);
      }

      // Position and draw each face
      if (i === 0) { // Front
        p.translate(0, 0, 20);
      } else if (i === 1) { // Right
        p.rotateY(p.HALF_PI);
        p.translate(0, 0, 20);
      } else if (i === 2) { // Top
        p.rotateX(p.HALF_PI);
        p.translate(0, 0, 20);
      } else if (i === 3) { // Back
        p.translate(0, 0, -20);
      } else if (i === 4) { // Left
        p.rotateY(p.HALF_PI);
        p.translate(0, 0, -20);
      } else if (i === 5) { // Bottom
        p.rotateX(p.HALF_PI);
        p.translate(0, 0, -20);
      }

      p.square(-20, -20, 40); // Draw each face
      p.pop(); // Restore original state
    }
  };
};

// Create a new p5 instance using your sketch definition
new p5(mySketch);