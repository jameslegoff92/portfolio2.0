(()=>{"use strict";var __webpack_modules__={903:()=>{eval('\n;// CONCATENATED MODULE: ./client/src/js/mobileNavigation.js\nconst openNav = document.querySelector(".open-nav-js");\r\nconst closeNav = document.querySelector(".close-nav-js");\r\nconst mobileNavContainer = document.querySelector(".mobile-nav-container-js");\r\nconst body = document.querySelector(".body-js");\r\n\r\nconst setMobileNavControl = () => {\r\n  openNav.addEventListener("click", () => {\r\n    openNav.style.visibility = "hidden";\r\n    closeNav.style.visibility = "visible";\r\n    mobileNavContainer.classList.add("slide-in-left");\r\n    mobileNavContainer.classList.remove("slide-out-left");\r\n  });\r\n\r\n  closeNav.addEventListener("click", () => {\r\n    openNav.style.visibility = "visible";\r\n    closeNav.style.visibility = "hidden";\r\n    mobileNavContainer.classList.add("slide-out-left");\r\n    mobileNavContainer.classList.remove("slide-in-left");\r\n  });\r\n};\n;// CONCATENATED MODULE: ./client/src/js/p5.js\nconst rotatingCube = (p) => {\r\n  // Setup function\r\n  p.setup = () => {\r\n    p.createCanvas(65, 65, p.WEBGL).parent("logo-canvas");\r\n  };\r\n\r\n  // Draw function\r\n  p.draw = () => {\r\n    p.background(0);\r\n    p.rotateX(p.frameCount * 0.01);\r\n    p.rotateY(p.frameCount * 0.01);\r\n\r\n    // Colors\r\n    let colors = [\r\n      [221, 160, 145], // Skin\r\n      [229, 227, 126], // Light Yellow\r\n      [234, 79, 32], // Orange\r\n    ];\r\n\r\n    // This will ensure each face is drawn with one of the three colors\r\n    for (let i = 0; i < 6; i++) {\r\n      p.push(); // Start a new drawing state\r\n      if (i < 3) {\r\n        p.fill(...colors[i]);\r\n      } else {\r\n        p.fill(...colors[i - 3]);\r\n      }\r\n\r\n      // Position and draw each face\r\n      if (i === 0) { // Front\r\n        p.translate(0, 0, 20);\r\n      } else if (i === 1) { // Right\r\n        p.rotateY(p.HALF_PI);\r\n        p.translate(0, 0, 20);\r\n      } else if (i === 2) { // Top\r\n        p.rotateX(p.HALF_PI);\r\n        p.translate(0, 0, 20);\r\n      } else if (i === 3) { // Back\r\n        p.translate(0, 0, -20);\r\n      } else if (i === 4) { // Left\r\n        p.rotateY(p.HALF_PI);\r\n        p.translate(0, 0, -20);\r\n      } else if (i === 5) { // Bottom\r\n        p.rotateX(p.HALF_PI);\r\n        p.translate(0, 0, -20);\r\n      }\r\n\r\n      p.square(-20, -20, 40); // Draw each face\r\n      p.pop(); // Restore original state\r\n    }\r\n  };\r\n};\n;// CONCATENATED MODULE: ./client/src/app.js\n\r\n\r\n\r\ndocument.addEventListener("DOMContentLoaded", () => {   \r\n  const toggle = document.querySelector(".theme-toggle");\r\n\r\n  // Listen for a change on the toggle\r\n  toggle.addEventListener("change", function () {\r\n    // If the toggle is on, add the dark class to the body\r\n    const body = document.body;\r\n\r\n    if (body.classList.contains("dark-theme")) {\r\n      body.classList.replace("dark-theme", "light-theme");\r\n    } else {\r\n      body.classList.replace("light-theme", "dark-theme");\r\n    }\r\n  });\r\n\r\n  setMobileNavControl();\r\n  new p5(rotatingCube);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1QjtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLEU7O0FDbkQrRDtBQUNyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLG1CQUFtQjtBQUNyQixTQUFTLFlBQVk7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NsaWVudC9zcmMvanMvbW9iaWxlTmF2aWdhdGlvbi5qcz9jMzAzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NsaWVudC9zcmMvanMvcDUuanM/N2E4YSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQvc3JjL2FwcC5qcz83ZTYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tbmF2LWpzXCIpO1xyXG5jb25zdCBjbG9zZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbmF2LWpzXCIpO1xyXG5jb25zdCBtb2JpbGVOYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtY29udGFpbmVyLWpzXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5LWpzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE1vYmlsZU5hdkNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgb3Blbk5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk5hdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIGNsb3NlTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW4tbGVmdFwiKTtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtb3V0LWxlZnRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGNsb3NlTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgbW9iaWxlTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXQtbGVmdFwiKTtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tbGVmdFwiKTtcclxuICB9KTtcclxufTsiLCJleHBvcnQgY29uc3Qgcm90YXRpbmdDdWJlID0gKHApID0+IHtcclxuICAvLyBTZXR1cCBmdW5jdGlvblxyXG4gIHAuc2V0dXAgPSAoKSA9PiB7XHJcbiAgICBwLmNyZWF0ZUNhbnZhcyg2NSwgNjUsIHAuV0VCR0wpLnBhcmVudChcImxvZ28tY2FudmFzXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIERyYXcgZnVuY3Rpb25cclxuICBwLmRyYXcgPSAoKSA9PiB7XHJcbiAgICBwLmJhY2tncm91bmQoMCk7XHJcbiAgICBwLnJvdGF0ZVgocC5mcmFtZUNvdW50ICogMC4wMSk7XHJcbiAgICBwLnJvdGF0ZVkocC5mcmFtZUNvdW50ICogMC4wMSk7XHJcblxyXG4gICAgLy8gQ29sb3JzXHJcbiAgICBsZXQgY29sb3JzID0gW1xyXG4gICAgICBbMjIxLCAxNjAsIDE0NV0sIC8vIFNraW5cclxuICAgICAgWzIyOSwgMjI3LCAxMjZdLCAvLyBMaWdodCBZZWxsb3dcclxuICAgICAgWzIzNCwgNzksIDMyXSwgLy8gT3JhbmdlXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIFRoaXMgd2lsbCBlbnN1cmUgZWFjaCBmYWNlIGlzIGRyYXduIHdpdGggb25lIG9mIHRoZSB0aHJlZSBjb2xvcnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIHAucHVzaCgpOyAvLyBTdGFydCBhIG5ldyBkcmF3aW5nIHN0YXRlXHJcbiAgICAgIGlmIChpIDwgMykge1xyXG4gICAgICAgIHAuZmlsbCguLi5jb2xvcnNbaV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAuZmlsbCguLi5jb2xvcnNbaSAtIDNdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUG9zaXRpb24gYW5kIGRyYXcgZWFjaCBmYWNlXHJcbiAgICAgIGlmIChpID09PSAwKSB7IC8vIEZyb250XHJcbiAgICAgICAgcC50cmFuc2xhdGUoMCwgMCwgMjApO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHsgLy8gUmlnaHRcclxuICAgICAgICBwLnJvdGF0ZVkocC5IQUxGX1BJKTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAyMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikgeyAvLyBUb3BcclxuICAgICAgICBwLnJvdGF0ZVgocC5IQUxGX1BJKTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAyMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykgeyAvLyBCYWNrXHJcbiAgICAgICAgcC50cmFuc2xhdGUoMCwgMCwgLTIwKTtcclxuICAgICAgfSBlbHNlIGlmIChpID09PSA0KSB7IC8vIExlZnRcclxuICAgICAgICBwLnJvdGF0ZVkocC5IQUxGX1BJKTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAtMjApO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDUpIHsgLy8gQm90dG9tXHJcbiAgICAgICAgcC5yb3RhdGVYKHAuSEFMRl9QSSk7XHJcbiAgICAgICAgcC50cmFuc2xhdGUoMCwgMCwgLTIwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcC5zcXVhcmUoLTIwLCAtMjAsIDQwKTsgLy8gRHJhdyBlYWNoIGZhY2VcclxuICAgICAgcC5wb3AoKTsgLy8gUmVzdG9yZSBvcmlnaW5hbCBzdGF0ZVxyXG4gICAgfVxyXG4gIH07XHJcbn07IiwiaW1wb3J0IHsgc2V0TW9iaWxlTmF2Q29udHJvbCB9IGZyb20gXCIuL2pzL21vYmlsZU5hdmlnYXRpb24uanNcIjtcclxuaW1wb3J0IHsgcm90YXRpbmdDdWJlIH0gZnJvbSBcIi4vanMvcDUuanNcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHsgICBcclxuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lLXRvZ2dsZVwiKTtcclxuXHJcbiAgLy8gTGlzdGVuIGZvciBhIGNoYW5nZSBvbiB0aGUgdG9nZ2xlXHJcbiAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSWYgdGhlIHRvZ2dsZSBpcyBvbiwgYWRkIHRoZSBkYXJrIGNsYXNzIHRvIHRoZSBib2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrLXRoZW1lXCIpKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoXCJkYXJrLXRoZW1lXCIsIFwibGlnaHQtdGhlbWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZXBsYWNlKFwibGlnaHQtdGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZXRNb2JpbGVOYXZDb250cm9sKCk7XHJcbiAgbmV3IHA1KHJvdGF0aW5nQ3ViZSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///903\n')}},__webpack_exports__={};__webpack_modules__[903]()})();