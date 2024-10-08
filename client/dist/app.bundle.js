(()=>{"use strict";var __webpack_modules__={753:()=>{eval('\n;// CONCATENATED MODULE: ./client/src/js/mobileNavigation.js\nvar openNav = document.querySelector(".open-nav-js");\nvar closeNav = document.querySelector(".close-nav-js");\nvar mobileNavContainer = document.querySelector(".mobile-nav-container-js");\nvar body = document.querySelector(".body-js");\nvar setMobileNavControl = function setMobileNavControl() {\n  openNav.addEventListener("click", function () {\n    openNav.style.visibility = "hidden";\n    closeNav.style.visibility = "visible";\n    mobileNavContainer.classList.add("slide-in-left");\n    mobileNavContainer.classList.remove("slide-out-left");\n  });\n  closeNav.addEventListener("click", function () {\n    openNav.style.visibility = "visible";\n    closeNav.style.visibility = "hidden";\n    mobileNavContainer.classList.add("slide-out-left");\n    mobileNavContainer.classList.remove("slide-in-left");\n  });\n};\n;// CONCATENATED MODULE: ./client/src/js/p5.js\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction createSketch(targetElement) {\n  return function (p) {\n    // Setup function\n    p.setup = function () {\n      p.createCanvas(70, 70, p.WEBGL).parent(targetElement);\n    };\n\n    // Draw function\n    p.draw = function () {\n      p.clear();\n      p.rotateX(p.frameCount * 0.01);\n      p.rotateY(p.frameCount * 0.01);\n\n      // Colors\n      var colors = [[221, 160, 145],\n      // Skin\n      [229, 227, 126],\n      // Light Yellow\n      [234, 79, 32] // Orange\n      ];\n\n      // This will ensure each face is drawn with one of the three colors\n      for (var i = 0; i < 6; i++) {\n        p.push(); // Start a new drawing state\n        if (i < 3) {\n          p.fill.apply(p, _toConsumableArray(colors[i]));\n        } else {\n          p.fill.apply(p, _toConsumableArray(colors[i - 3]));\n        }\n\n        // Position and draw each face\n        if (i === 0) {\n          // Front\n          p.translate(0, 0, 20);\n        } else if (i === 1) {\n          // Right\n          p.rotateY(p.HALF_PI);\n          p.translate(0, 0, 20);\n        } else if (i === 2) {\n          // Top\n          p.rotateX(p.HALF_PI);\n          p.translate(0, 0, 20);\n        } else if (i === 3) {\n          // Back\n          p.translate(0, 0, -20);\n        } else if (i === 4) {\n          // Left\n          p.rotateY(p.HALF_PI);\n          p.translate(0, 0, -20);\n        } else if (i === 5) {\n          // Bottom\n          p.rotateX(p.HALF_PI);\n          p.translate(0, 0, -20);\n        }\n        p.square(-20, -20, 40); // Draw each face\n        p.pop(); // Restore original state\n      }\n    };\n  };\n}\n;// CONCATENATED MODULE: ./client/src/theme-control.js\n// theme.js\nfunction applyTheme(theme) {\n  if (theme === "false") {\n    document.body.classList.replace("dark-theme", "light-theme");\n  } else if (theme === null) {\n    console.log("theme is null");\n  } else {\n    document.body.classList.replace("light-theme", "dark-theme");\n  }\n}\nfunction loadThemeFromLocalStorage() {\n  var theme = localStorage.getItem("theme");\n  applyTheme(theme);\n}\n;// CONCATENATED MODULE: ./client/src/app.js\n\n\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  var toggle = document.querySelector(".theme-toggle");\n\n  // Listen for a change on the toggle\n  toggle.addEventListener("change", function () {\n    //The toggle starts off as false, so if it\'s checked, set the theme to dark\n    var isOn = toggle.checked;\n    localStorage.setItem("theme", isOn);\n    loadThemeFromLocalStorage();\n  });\n  new p5(createSketch("logo-canvas"));\n  new p5(createSketch("logo-canvas-mobile"));\n  setMobileNavControl();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQztFQUMxQ1AsbUJBQW1CLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQvc3JjL2pzL21vYmlsZU5hdmlnYXRpb24uanM/YzMwMyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQvc3JjL2pzL3A1LmpzPzdhOGEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY2xpZW50L3NyYy90aGVtZS1jb250cm9sLmpzPzhiZGEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY2xpZW50L3NyYy9hcHAuanM/N2U2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVuTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLW5hdi1qc1wiKTtcclxuY29uc3QgY2xvc2VOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW5hdi1qc1wiKTtcclxuY29uc3QgbW9iaWxlTmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWNvbnRhaW5lci1qc1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keS1qc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNb2JpbGVOYXZDb250cm9sID0gKCkgPT4ge1xyXG4gIG9wZW5OYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG9wZW5OYXYuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBjbG9zZU5hdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBtb2JpbGVOYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlLWluLWxlZnRcIik7XHJcbiAgICBtb2JpbGVOYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLW91dC1sZWZ0XCIpO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk5hdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBjbG9zZU5hdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtb3V0LWxlZnRcIik7XHJcbiAgICBtb2JpbGVOYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluLWxlZnRcIik7XHJcbiAgfSk7XHJcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNrZXRjaCh0YXJnZXRFbGVtZW50KSB7XHJcbiAgcmV0dXJuIChwKSA9PiB7XHJcbiAgICAvLyBTZXR1cCBmdW5jdGlvblxyXG4gICAgcC5zZXR1cCA9ICgpID0+IHtcclxuICAgICAgcC5jcmVhdGVDYW52YXMoNzAsIDcwLCBwLldFQkdMKS5wYXJlbnQodGFyZ2V0RWxlbWVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERyYXcgZnVuY3Rpb25cclxuICAgIHAuZHJhdyA9ICgpID0+IHtcclxuICAgICAgcC5jbGVhcigpO1xyXG4gICAgICBwLnJvdGF0ZVgocC5mcmFtZUNvdW50ICogMC4wMSk7XHJcbiAgICAgIHAucm90YXRlWShwLmZyYW1lQ291bnQgKiAwLjAxKTtcclxuXHJcbiAgICAgIC8vIENvbG9yc1xyXG4gICAgICBsZXQgY29sb3JzID0gW1xyXG4gICAgICAgIFsyMjEsIDE2MCwgMTQ1XSwgLy8gU2tpblxyXG4gICAgICAgIFsyMjksIDIyNywgMTI2XSwgLy8gTGlnaHQgWWVsbG93XHJcbiAgICAgICAgWzIzNCwgNzksIDMyXSwgLy8gT3JhbmdlXHJcbiAgICAgIF07XHJcblxyXG4gICAgICAvLyBUaGlzIHdpbGwgZW5zdXJlIGVhY2ggZmFjZSBpcyBkcmF3biB3aXRoIG9uZSBvZiB0aGUgdGhyZWUgY29sb3JzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgcC5wdXNoKCk7IC8vIFN0YXJ0IGEgbmV3IGRyYXdpbmcgc3RhdGVcclxuICAgICAgICBpZiAoaSA8IDMpIHtcclxuICAgICAgICAgIHAuZmlsbCguLi5jb2xvcnNbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwLmZpbGwoLi4uY29sb3JzW2kgLSAzXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiBhbmQgZHJhdyBlYWNoIGZhY2VcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gRnJvbnRcclxuICAgICAgICAgIHAudHJhbnNsYXRlKDAsIDAsIDIwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgIC8vIFJpZ2h0XHJcbiAgICAgICAgICBwLnJvdGF0ZVkocC5IQUxGX1BJKTtcclxuICAgICAgICAgIHAudHJhbnNsYXRlKDAsIDAsIDIwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcclxuICAgICAgICAgIC8vIFRvcFxyXG4gICAgICAgICAgcC5yb3RhdGVYKHAuSEFMRl9QSSk7XHJcbiAgICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAyMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICAvLyBCYWNrXHJcbiAgICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAtMjApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gNCkge1xyXG4gICAgICAgICAgLy8gTGVmdFxyXG4gICAgICAgICAgcC5yb3RhdGVZKHAuSEFMRl9QSSk7XHJcbiAgICAgICAgICBwLnRyYW5zbGF0ZSgwLCAwLCAtMjApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gNSkge1xyXG4gICAgICAgICAgLy8gQm90dG9tXHJcbiAgICAgICAgICBwLnJvdGF0ZVgocC5IQUxGX1BJKTtcclxuICAgICAgICAgIHAudHJhbnNsYXRlKDAsIDAsIC0yMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLnNxdWFyZSgtMjAsIC0yMCwgNDApOyAvLyBEcmF3IGVhY2ggZmFjZVxyXG4gICAgICAgIHAucG9wKCk7IC8vIFJlc3RvcmUgb3JpZ2luYWwgc3RhdGVcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiIsIi8vIHRoZW1lLmpzXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRoZW1lKHRoZW1lKSB7XHJcbiAgaWYgKHRoZW1lID09PSBcImZhbHNlXCIpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoXCJkYXJrLXRoZW1lXCIsIFwibGlnaHQtdGhlbWVcIik7XHJcbiAgfSBlbHNlIGlmICh0aGVtZSA9PT0gbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGVtZSBpcyBudWxsXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZXBsYWNlKFwibGlnaHQtdGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUaGVtZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xyXG4gIGFwcGx5VGhlbWUodGhlbWUpOyBcclxufSIsImltcG9ydCB7IHNldE1vYmlsZU5hdkNvbnRyb2wgfSBmcm9tIFwiLi9qcy9tb2JpbGVOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNrZXRjaCB9IGZyb20gXCIuL2pzL3A1LmpzXCI7XHJcbmltcG9ydCB7IGxvYWRUaGVtZUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90aGVtZS1jb250cm9sLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtdG9nZ2xlXCIpO1xyXG5cclxuICAvLyBMaXN0ZW4gZm9yIGEgY2hhbmdlIG9uIHRoZSB0b2dnbGVcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1RoZSB0b2dnbGUgc3RhcnRzIG9mZiBhcyBmYWxzZSwgc28gaWYgaXQncyBjaGVja2VkLCBzZXQgdGhlIHRoZW1lIHRvIGRhcmtcclxuICAgIGxldCBpc09uID0gdG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGlzT24pO1xyXG4gICAgbG9hZFRoZW1lRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH0pO1xyXG5cclxuICBuZXcgcDUoY3JlYXRlU2tldGNoKFwibG9nby1jYW52YXNcIikpO1xyXG4gIG5ldyBwNShjcmVhdGVTa2V0Y2goXCJsb2dvLWNhbnZhcy1tb2JpbGVcIikpO1xyXG4gIHNldE1vYmlsZU5hdkNvbnRyb2woKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJvcGVuTmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VOYXYiLCJtb2JpbGVOYXZDb250YWluZXIiLCJib2R5Iiwic2V0TW9iaWxlTmF2Q29udHJvbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjcmVhdGVTa2V0Y2giLCJ0YXJnZXRFbGVtZW50IiwicCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiV0VCR0wiLCJwYXJlbnQiLCJkcmF3IiwiY2xlYXIiLCJyb3RhdGVYIiwiZnJhbWVDb3VudCIsInJvdGF0ZVkiLCJjb2xvcnMiLCJpIiwicHVzaCIsImZpbGwiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsInRyYW5zbGF0ZSIsIkhBTEZfUEkiLCJzcXVhcmUiLCJwb3AiLCJhcHBseVRoZW1lIiwidGhlbWUiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImxvYWRUaGVtZUZyb21Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9nZ2xlIiwiaXNPbiIsImNoZWNrZWQiLCJzZXRJdGVtIiwicDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///753\n')}},__webpack_exports__={};__webpack_modules__[753]()})();