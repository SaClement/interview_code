export function searchInsert(nums, target) {
  let arn = nums.length,
    left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num < target) {
      left = mid + 1;
    } else {
      arn = mid;
      right = mid - 1;
    }
  }
  return arn;
}
