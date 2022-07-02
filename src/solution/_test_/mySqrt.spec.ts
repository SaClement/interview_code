import { mySqrt } from "../src/mySqrt";

describe("get sqrt", () => {
    test("my sqrt function", () => {
        let prevSqrt = 4;
        let prevSqrt2 = 8;

        expect(mySqrt(prevSqrt)).toBe(2)
        expect(mySqrt(prevSqrt2)).toBe(2)
    })
})