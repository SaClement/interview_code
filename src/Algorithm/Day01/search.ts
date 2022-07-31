/**
 * 二分查找
 * @param nums - 有序数组
 * @param target - 目标值
 * @returns - 数组下标
 */
export function search(nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((end - start) / 2 + start);
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

export function search2(nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = (right + left) >> 1;
    const num = nums[mid];
    if (num === target) return mid;
    left = num < target ? mid + 1 : left;
    right = num < target ? right : mid;
  }
  return -1;
}
