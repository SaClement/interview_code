export function removeElement(nums, val) {
  let n = nums.length;
  for(let i = 0; i < n; i++) {
    if(nums[i] == val) {
      nums.splice(i, 1)
      i--;
    }
  }
  return nums.length
}