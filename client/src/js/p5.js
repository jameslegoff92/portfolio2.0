export function createSketch(targetElement) {
  return (p) => {
    // Setup function
    p.setup = () => {
      p.createCanvas(70, 70, p.WEBGL).parent(targetElement);
    };

    // Draw function
    p.draw = () => {
      p.clear();
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
        if (i === 0) {
          // Front
          p.translate(0, 0, 20);
        } else if (i === 1) {
          // Right
          p.rotateY(p.HALF_PI);
          p.translate(0, 0, 20);
        } else if (i === 2) {
          // Top
          p.rotateX(p.HALF_PI);
          p.translate(0, 0, 20);
        } else if (i === 3) {
          // Back
          p.translate(0, 0, -20);
        } else if (i === 4) {
          // Left
          p.rotateY(p.HALF_PI);
          p.translate(0, 0, -20);
        } else if (i === 5) {
          // Bottom
          p.rotateX(p.HALF_PI);
          p.translate(0, 0, -20);
        }

        p.square(-20, -20, 40); // Draw each face
        p.pop(); // Restore original state
      }
    };
  };
}