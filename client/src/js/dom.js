// This file contains functions that interact with the DOM

// Function to get an element by its ID, CSS class, or tag name
export function getBySelector(selector = null) {

  if (typeof selector !== 'string') {
    console.warn('Please provide a string');
    return null; 
  }

  const element = document.querySelector(selector)
  
  return element
} 