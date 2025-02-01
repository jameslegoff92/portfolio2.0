export function setSessionKey(key, value) {
  if (!key || !value) {
    return "Key or value is missing";
  }
  sessionStorage.setItem(key, value);
}  

export function getSessionKey(key) { 
  if (!key) {
    return "Key is missing";
  }

  if (!sessionStorage.getItem(key)) {
    return "Key does not exist";
  }

  return sessionStorage.getItem(key);
}