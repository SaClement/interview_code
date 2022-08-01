import { sortedSquares, sortedSquaresTwoKeys } from "../sortedSquares";

describe('sortedSquares', () => {
  test('Ordered array squared before sorting',()=> {
    let nums: number[] = [-4,-1,0,3,10];
    let nums2: number[] = [-7,-3,2,3,11];

    expect(sortedSquares(nums)).toEqual([0,1,9,16,100]);
    expect(sortedSquaresTwoKeys(nums2)).toEqual([4,9,9,49,121]);
  })
})