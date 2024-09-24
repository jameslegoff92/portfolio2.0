// theme.js
export function applyTheme(theme) {
  if (theme === "false") {
    document.body.classList.replace("dark-theme", "light-theme");
  } else if (theme === null) {
    console.log("theme is null");
  } else {
    document.body.classList.replace("light-theme", "dark-theme");
  }
}

export function loadThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme");
  applyTheme(theme);
}