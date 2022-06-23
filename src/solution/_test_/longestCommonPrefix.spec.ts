import { crossLongestPrefix, directionLongestPrefix } from "../src/longestPrefix";

describe("longestCommonPrefix", () => {
  test("lonest common prefix", () => {
    let strArray = ["flower","flow","flight"];

    expect(crossLongestPrefix(strArray)).toBe('fl')
    expect(directionLongestPrefix(strArray)).toBe('fl')
    
 })
})