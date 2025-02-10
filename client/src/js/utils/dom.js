export const removeClassFromElements = (selector, className) => {
  if (typeof selector !== "string") {
    return console.warn("Provide a string selector for the elements to remove class from");
  }

  const elements = document.querySelectorAll(selector);
  elements.forEach(el => el.classList.remove(className));
}

export const createElement = (elementName) => {
  const element = document.createElement(elementName);
  return element;
}

export const appendElement = (parent, element) => {
  const result = parent.appendChild(element);
  return result
}

export const addTextContent = (element, text) => { 
  const result = element.textContent = text;
  return result;
}