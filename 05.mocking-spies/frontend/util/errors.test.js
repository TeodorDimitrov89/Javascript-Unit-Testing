import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message and data", () => {
    const testCode = 1;
    const testMessage = "Test";
    const testData = {
      id: "test",
    };

    let testError = new HttpError(testCode, testMessage, testData);

    expect(testError.statusCode).toBe(testCode);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined if no data is provided", () => {
    const testCode = 1;
    const testMessage = "Test";

    const testError = new HttpError(testCode, testMessage);

    expect(testError.statusCode).toBe(testCode);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "test";
    const testValidationError = new ValidationError(testMessage);

    expect(testValidationError.message).toBe(testMessage);
  });
});
