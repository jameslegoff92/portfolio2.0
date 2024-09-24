import { applyTheme } from "./theme-control";

// theme.test.js
describe('Theme functionality tests', () => {
  beforeEach(() => {
    document.body.classList.add('light-theme'); // Start with light-theme
  });

  test('Should switch to light theme when theme is "false" in localStorage', () => {
    // Mock localStorage to return "false"
    applyTheme("false");

    // Assert that the class was replaced
    expect(document.body.classList.contains('light-theme')).toBe(true);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  test('Should log "theme is null" when theme is null in localStorage', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log');

    // Code to test
    applyTheme(null);

    // Assert that console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('theme is null');
  });

  test('Should switch to dark theme when theme is anything other than "false" or null', () => {
    applyTheme("true");

    // Assert that the class was replaced
    expect(document.body.classList.contains('dark-theme')).toBe(true);
    expect(document.body.classList.contains('light-theme')).toBe(false);
  });
});
