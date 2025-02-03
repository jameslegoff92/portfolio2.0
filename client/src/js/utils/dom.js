export const removeClassFromElements = (selector, className) => {
  if (typeof selector !== "string") {
    return console.warn("Provide a string selector for the elements to remove class from");
  }

  const elements = document.querySelectorAll(selector);
  elements.forEach(el => el.classList.remove(className));
}