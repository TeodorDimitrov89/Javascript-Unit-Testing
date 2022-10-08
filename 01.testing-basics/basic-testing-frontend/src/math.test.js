import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number in an array", () => {
  //Arrange
  const numbers = [1, 2, 3, -2];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, nextValue) => prevValue + nextValue,
    0
  );

  expect(result).toBe(expectedResult);
});
