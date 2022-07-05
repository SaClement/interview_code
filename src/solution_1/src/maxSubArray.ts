
// 动态规划
export function maxSubArray(nums) {
    let pre = 0,
        maxAns = nums[0];
    nums.forEach(n => {
        pre = Math.max(pre + n, n);
        maxAns = Math.max(maxAns, pre);
        // -2, 1, -3, 4, -1
    })
    return maxAns;
}

// 分治 
// todo