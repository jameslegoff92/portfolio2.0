var theme = localStorage.getItem("theme");
let toggle = document.querySelector(".theme-toggle");

if (theme === "false") {
  document.body.classList.replace("dark-theme", "light-theme");
  toggle.checked = false;
} else if (theme === null) {
  console.log("theme is null");
} else {
  document.body.classList.replace("light-theme", "dark-theme");
  toggle.checked = true;
}