/**
 * 打家劫舍哪家强
 */

function rob(nums: number[]) {
  let len = nums.length;
  if (len == 0) {
    return 0;
  }
  // 动态规划方程 dp[n] = MAX(dp[n-1], dp[n-2] + num)
  const dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
}

function robJava(nums) {
  const dp = new Array(nums.length + 2).fill(0);
  for (let i = 0; i < nums.length; i++) {
    dp[i + 2] = Math.max(dp[i] + nums[i], dp[i + 1]);
  }
  return dp[nums.length + 1];
}

console.log(rob([2,7,9,3,1]))