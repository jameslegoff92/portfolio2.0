(()=>{"use strict";var __webpack_modules__={475:()=>{eval('\n;// CONCATENATED MODULE: ./client/src/js/mobileNavigation.js\nconst openNav = document.querySelector(".open-nav-js");\r\nconst closeNav = document.querySelector(".close-nav-js");\r\nconst mobileNavContainer = document.querySelector(".mobile-nav-container-js");\r\nconst body = document.querySelector(".body-js");\r\n\r\nconst setMobileNavControl = () => {\r\n  openNav.addEventListener("click", () => {\r\n    openNav.style.visibility = "hidden";\r\n    closeNav.style.visibility = "visible";\r\n    mobileNavContainer.classList.add("slide-in-left");\r\n    mobileNavContainer.classList.remove("slide-out-left");\r\n  });\r\n\r\n  closeNav.addEventListener("click", () => {\r\n    openNav.style.visibility = "visible";\r\n    closeNav.style.visibility = "hidden";\r\n    mobileNavContainer.classList.add("slide-out-left");\r\n    mobileNavContainer.classList.remove("slide-in-left");\r\n  });\r\n};\n;// CONCATENATED MODULE: ./client/src/app.js\n\r\n\r\ndocument.addEventListener("DOMContentLoaded", () => {   \r\n  const toggle = document.querySelector(".theme-toggle");\r\n\r\n  // Listen for a change on the toggle\r\n  toggle.addEventListener("change", function () {\r\n    // If the toggle is on, add the dark class to the body\r\n    const body = document.body;\r\n    console.log("toggled");\r\n    if (body.classList.contains("dark-theme")) {\r\n      body.classList.replace("dark-theme", "light-theme");\r\n    } else {\r\n      body.classList.replace("light-theme", "dark-theme");\r\n    }\r\n  });\r\n\r\n  setMobileNavControl();\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc1LmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7QUNuQitEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsbUJBQW1CO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQvc3JjL2pzL21vYmlsZU5hdmlnYXRpb24uanM/YzMwMyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQvc3JjL2FwcC5qcz83ZTYzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tbmF2LWpzXCIpO1xyXG5jb25zdCBjbG9zZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbmF2LWpzXCIpO1xyXG5jb25zdCBtb2JpbGVOYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtY29udGFpbmVyLWpzXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5LWpzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE1vYmlsZU5hdkNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgb3Blbk5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk5hdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIGNsb3NlTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW4tbGVmdFwiKTtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtb3V0LWxlZnRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGNsb3NlTmF2LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgbW9iaWxlTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXQtbGVmdFwiKTtcclxuICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW4tbGVmdFwiKTtcclxuICB9KTtcclxufTsiLCJpbXBvcnQgeyBzZXRNb2JpbGVOYXZDb250cm9sIH0gZnJvbSBcIi4vanMvbW9iaWxlTmF2aWdhdGlvbi5qc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4geyAgIFxyXG4gIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtdG9nZ2xlXCIpO1xyXG5cclxuICAvLyBMaXN0ZW4gZm9yIGEgY2hhbmdlIG9uIHRoZSB0b2dnbGVcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBJZiB0aGUgdG9nZ2xlIGlzIG9uLCBhZGQgdGhlIGRhcmsgY2xhc3MgdG8gdGhlIGJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2dnbGVkXCIpO1xyXG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZXBsYWNlKFwiZGFyay10aGVtZVwiLCBcImxpZ2h0LXRoZW1lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVwbGFjZShcImxpZ2h0LXRoZW1lXCIsIFwiZGFyay10aGVtZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0TW9iaWxlTmF2Q29udHJvbCgpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///475\n')}},__webpack_exports__={};__webpack_modules__[475]()})();