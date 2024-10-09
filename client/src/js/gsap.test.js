import { animationScale } from "./gsap"

describe ('animationBounce', () => {
  test('Should log "No element found with the selector: null" when no element is found', () => {
    // Mock console.warn
    const consoleSpy = jest.spyOn(console, 'warn');

    // Code to test
    animationScale(null);

    // Assert that console.warn was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('No element found with the selector: null');
    consoleSpy.mockRestore();
  });

  test('Should log "No element found with the selector: null" when the function is called without and argument', () => {
    // Mock console.warn
    const consoleSpy = jest.spyOn(console, 'warn');

    // Code to test
    animationScale(undefined);

    // Assert that console.warn was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('No element found with the selector: null');
    consoleSpy.mockRestore();
  });
});
