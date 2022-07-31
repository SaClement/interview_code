import { search } from "../search";

describe("search", () => {
    test("Find subscripts based on content", () => {
        let numsArray = [-1,0,3,5,9,12];
        let target = 9;
        expect(search(numsArray, target)).toBe(4)
    })
})