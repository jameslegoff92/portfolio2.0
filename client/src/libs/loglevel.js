import log from "loglevel";

const isProduction = window.location.hostname !== "localhost";
log.setLevel(isProduction ? "warn" : "debug"); // Restrict logs in production

const logger = {
  debug: (...args) => log.debug("[DEBUG]", ...args),
  info: (...args) => log.info("[INFO]", ...args),
  warn: (...args) => log.warn("[WARN]", ...args),
  error: (...args) => log.error("[ERROR]", ...args),
};

export default logger;