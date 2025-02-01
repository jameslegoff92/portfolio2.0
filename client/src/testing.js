function setSessionStorage(key, value) {
  if (!key || !value) {
    return "Key or value is missing";
  }
  sessionStorage.setItem(key, value);
}

function getSessionStorage(key) { 
  if (!key) {
    return "Key is missing";
  }

  if (!sessionStorage.getItem(key)) {
    return "Key does not exist";
  }

  return sessionStorage.getItem(key);
}

setSessionStorage("name", "John");
const sessionKey = getSessionStorage("name"); // "John"
console.log("session key: ", sessionKey);