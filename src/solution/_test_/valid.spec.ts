import { isValid } from "../src/valid"

describe("Valid", () => {
  test("is Valid", () => {
    let vstr = "{(())}";
    let vstr2 = "{}(){([]";
    expect(isValid(vstr)).toBe(true);
    expect(isValid(vstr2)).toBe(false);
  })
})