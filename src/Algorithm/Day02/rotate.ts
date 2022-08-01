/**
 * 轮转数组
 * @param nums - 数组 
 * @param k - 轮转次数
 */
function rotate(nums: number[], k: number) {
  let i = 0;
  k %= nums.length;
  if (nums.length != 0) {
    while (i++ < k) {
      // 把数组中的最后一个元素取出来插入第一个元素
      nums.splice(0, 0, <number>nums.pop())
    }
  }
  return nums;
}

function rotateNewArr(nums: number[], k: number) {
  let temp: number[] = [];
  k %= nums.length;
  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }
  nums.splice(0, nums.length-1, ...temp)
  return nums;
}

function rotateOfThreeTime(nums: number[], k: number) {
  function reverse(num, start, end) {
    while (start < end) {
      let temp = num[end];
      num[end] = num[start];
      num[start] = temp;
      start++;
      end--;
    }
  }

  k %= nums.length
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1)
  return nums;
}

console.log(rotateNewArr([1, 2, 3, 4, 5, 6, 7], 3))
