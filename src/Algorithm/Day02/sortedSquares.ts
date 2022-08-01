/**
 * 有序数组平方再排序
 * @param nums - 有序数组
 * @returns - 平方后的有序数组
 */
export function sortedSquares(nums: number[]): number[] {
  let newNums: number[] = nums.map(num => num ** 2);
  return newNums.sort((a, b) => a - b);
}

/**
 * 双指针 - 有序数组平方再排序
 * @param nums 
 * @returns 
 */
export function sortedSquaresTwoKeys(nums: number[]): number[] {
  let n: number = nums.length;
  let ans: number[] = new Array(n).fill(0);
  for (let i = 0, j = n - 1, p = n - 1; i <= j;) {
    if (nums[i] ** 2 > nums[j] ** 2) {
      ans[p] = nums[i] ** 2
      i++
    } else {
      ans[p] = nums[j] ** 2
      j--
    }
    p--
  }
  return ans;
}