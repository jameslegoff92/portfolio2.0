import logger from './logger.js';

describe("Logger Functionality", () => {

  const originalEnv = process.env.NODE_ENV; // Store original value

  afterAll(() => {
    process.env.NODE_ENV = originalEnv; // Reset after each test
  });

  test("logger logs to the console in development", () => {
    const log = jest.spyOn(console, "log");
    const info = jest.spyOn(console, "info");
    const warn = jest.spyOn(console, "warn");
    const debug = jest.spyOn(console, "debug");
    const error = jest.spyOn(console, "error");

    logger.log("This is a log message");
    logger.info("This is an info message");
    logger.warn("This is a warn message");
    logger.debug("This is a debug message");
    logger.error("This is an error message");

    expect(log).toHaveBeenCalled();
    expect(info).toHaveBeenCalled();
    expect(warn).toHaveBeenCalled();
    expect(debug).toHaveBeenCalled();
    expect(error).toHaveBeenCalled();

    expect(log).toHaveBeenCalledWith("This is a log message");
    expect(info).toHaveBeenCalledWith("This is an info message");
    expect(warn).toHaveBeenCalledWith("This is a warn message");
    expect(debug).toHaveBeenCalledWith("This is a debug message");
    expect(error).toHaveBeenCalledWith("This is an error message");

    log.mockClear();
    info.mockClear();
    warn.mockClear();
    debug.mockClear();
    error.mockClear();
  })

  test("logger does not log to the console in production", () => { 
    process.env.NODE_ENV = "production"; // Set to production

    const log = jest.spyOn(console, "log");
    const info = jest.spyOn(console, "info");
    const warn = jest.spyOn(console, "warn");
    const debug = jest.spyOn(console, "debug");
    const error = jest.spyOn(console, "error");

    logger.log("This is a log message");
    logger.info("This is an info message");
    logger.warn("This is a warn message");
    logger.debug("This is a debug message");
    logger.error("This is an error message");

    expect(log).not.toHaveBeenCalled();
    expect(info).not.toHaveBeenCalled(); 
    expect(warn).not.toHaveBeenCalled();
    expect(debug).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalled(); // Error should always log

    log.mockClear();
    info.mockClear();
    warn.mockClear();
    debug.mockClear();
    error.mockClear();
  });
})