import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  //Arrange
  const input = "1";

  //Act
  const result = transformToNumber(input);

  //Assert
  expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of type number", () => {
  //Arrange
  const input = "1";

  //Act
  const result = transformToNumber(input);

  //Assert
  expect(result).toBe(+input);
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid number";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it("should yield NaN if no value is provided", () => {
  const result = transformToNumber();
  expect(result).toBeNaN();
});
