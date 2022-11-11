import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should pass if input is not empty", () => {
    // Arrange
    const input = "title";
    //Act
    const validationInput = validateNotEmpty(input);
    //Assertion
    expect(validationInput).toBeUndefined();
  });

  it("shoud throw an error if input is empty", () => {
    const inputText = "";
    const validationFn = () => validateNotEmpty(inputText);
    expect(validationFn).toThrow();
  });

  it("shoud throw an error with message if provided", () => {
    const testText = "  ";
    const testMessage = "test";
    const validationFn = () => validateNotEmpty(testText, testMessage);
    expect(validationFn).toThrowError(testMessage);
  });
});
