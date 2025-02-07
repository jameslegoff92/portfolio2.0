import { getSessionKey } from "./js/utils/storageAPI.js";
import logger from "./libs/loglevel.js";

document.addEventListener("DOMContentLoaded", function () {
  logger.debug("DOM is loaded");
  const sessionKey = getSessionKey("hasAnimated");
  logger.debug(`Session key: ${sessionKey}`);

  if (sessionKey === "true") {
    logger.debug("sessionKey is true");
    const targetScript = document.querySelector(
      '#testingId'
    );
  
    if (targetScript) {
      logger.debug("Target script found. Adding css stylesheet dynamically");
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/styles.css";
      targetScript.parentNode.insertBefore(link, targetScript.nextSibling);
      logger.debug("CSS stylesheet added successfully");
      return;
    } else {
      logger.debug("Target script not found");
    }
  }
});
