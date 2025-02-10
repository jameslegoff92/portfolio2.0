export const customCursor = () => {
    // Create a div element for the custom cursor
    const cursor = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = "View Repository";
    cursor.id = "custom-cursor";
    cursor.appendChild(text);
    
    document.body.appendChild(cursor);
    const targetArea = document
      .querySelectorAll(".projects-grid__link")
      .forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursor.style.display = "block";
        });
        link.addEventListener("mouseleave", () => {
          cursor.style.display = "none";
        });
      });
  
    // Update cursor position on mouse move
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
}