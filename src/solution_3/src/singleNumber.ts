function singleNumber(nums: Array<number>) {
  // let result = 0;
  // for(let i = 0;i<nums.length;i++) {
  //   result ^= nums[i];
  // }
  // return result;

  // reduce

  return nums.reduce((p, c) => p ^ c)
}

console.log(singleNumber([2,2,1]));
