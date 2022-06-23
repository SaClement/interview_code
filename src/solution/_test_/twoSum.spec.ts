import { hashTwoSumSolution, mapTwoSumSolution } from '../src/twoSum'
describe('twoSum', () => {
  test('export indexArray', () => {
    const nums = [2, 7, 11, 15];
    const target = 13;

    expect(hashTwoSumSolution(nums, target)).toEqual([0, 2])
    expect(mapTwoSumSolution(nums, target)).toEqual([0, 2])
  })
})