import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate token", (done) => {
  const userEmail = "test@test.com";

  generateToken(userEmail, (err, token) => {
    try {
      // working with callbacks
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate token", () => {
  const userEmail = "test@test.com";

  return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
});

it("should generate token", async () => {
  const userEmail = "test@test.com";
  const token = await generateTokenPromise(userEmail);

  expect(token).toBeDefined();
});
