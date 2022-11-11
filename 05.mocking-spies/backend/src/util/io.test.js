import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();

  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return Promise with no value if called corectly", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();

  // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
