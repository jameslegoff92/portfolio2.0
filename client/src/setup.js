import { getSessionKey } from "./js/utils/storageAPI.js";
import logger from "./libs/loglevel.js";

document.addEventListener("DOMContentLoaded", function () {
  logger.debug("DOM is loaded");
  const sessionKey = getSessionKey("hasAnimated");
  logger.debug(`Session key: ${sessionKey}`);

  if (sessionKey === "true") {
    document.getElementById("gsaphidden").disabled = false;
  }
});
