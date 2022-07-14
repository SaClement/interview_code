import { generate } from "../src/generate";

describe("generate", () => {
  test("generate", () => {
    let num = 5;
    let result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    expect(generate(num)).toEqual(result);
  })
})