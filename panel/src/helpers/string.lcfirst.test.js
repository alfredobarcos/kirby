/**
 * @vitest-environment node
 */

import string from "./string.js";

describe("$helper.string.lcfirst", () => {
  it("should convert first character to lowercase", () => {
    const result = string.lcfirst("Hello");
    expect(result).toBe("hello");
  });

  it("should convert single character to lowercase", () => {
    const result = string.lcfirst("H");
    expect(result).toBe("h");
  });

  it("should ignore invalid input", () => {
    const result = string.lcfirst(0);
    expect(result).toBe("0");
  });
});
