import logger from "../../libs/loglevel.js";

export function setSessionKey(key, value) {
  logger.debug("Setting session key and value: ", key, value);
  if (!key || !value) {
    logger.debug("Key or value is missing");
    return "Key or value is missing";
  }
  sessionStorage.setItem(key, value);
  logger.debug("Key and value set successfully");
}  

export function getSessionKey(key) { 
  if (!key) {
    logger.debug("Key is missing or inccorect");
    return "Key is missing";
  }

  let sessionValue;

  try {
    sessionValue = sessionStorage.getItem(key);
  } catch (e) {
    logger.error("Key does not exist: ", e);
    return "Key does not exist";
  }

  logger.debug("Key and value exists: ", sessionValue);
  return sessionValue;
}