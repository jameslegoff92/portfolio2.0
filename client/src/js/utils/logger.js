const logger = {
  log: (...args) => {
      if (process.env.NODE_ENV !== 'production') {
          console.log(...args);
      } 
  },
  info: (...args) => {
      if (process.env.NODE_ENV !== 'production') {
          console.info(...args);
      }
  },
  warn: (...args) => {
      if (process.env.NODE_ENV !== 'production') {
          console.warn(...args);
      }
  },
  error: (...args) => {
      console.error(...args); // Always log errors
  },
  debug: (...args) => {
      if (process.env.NODE_ENV !== 'production') {
          console.debug(...args);
      }
  }
};

export default logger;