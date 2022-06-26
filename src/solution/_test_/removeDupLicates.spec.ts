import { removeDupLicates } from "../src/removeDupLicates"

describe("removeDupLicates", () => {
  test("remove duplicates", () => {
    let order = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDupLicates(order)).toBe(5)
  })
})