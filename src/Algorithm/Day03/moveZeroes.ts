export function moveZeroes(nums: number[]): number[] {
  let n = nums.length;
  let temp;
  let left = 0,
    right = 0;
  while (right < n) {
    if (nums[right] != 0 ) {
      temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp;
      left++;
    }
    right++;
  }
  return nums;
}