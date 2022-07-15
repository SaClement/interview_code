import { getRow } from "../src/getRow";

describe("getRow II", () => {
  test("getRow", () => {
    let num = 5;
    expect(getRow(num)).toEqual([1, 5, 10, 10, 5, 1])
  })
})