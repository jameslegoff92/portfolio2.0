import { getBySelector } from "./dom";

describe("Testing the getBySelector function", () => {
  let container; 
  beforeEach(() => {
    container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
  });

  test("Should return an element", () => {
    const element = getBySelector("#container");
    expect(element).toBeTruthy();
  })

  test ("Should return null if no element is found", () => {
    const element = getBySelector("#not-found");
    expect(element).toBeNull();
  })

  test("Should return null if no argument is provided", () => {
    const element = getBySelector();
    expect(element).toBeNull();
  });

  test("Should trigger a console warning and return null if a data type other than a string is passed as an argument", () => {
    const warnMock = jest.spyOn(console, "warn").mockImplementation(() => {});
    const dataType = [1, true, {}, [], null, undefined].forEach((type) => {
      const element = getBySelector(type);
      expect(warnMock).toHaveBeenCalledWith("Please provide a string");
      expect(element).toBeNull();
      warnMock.mockClear();
    });

    warnMock.mockRestore();
  });
});