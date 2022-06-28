// 二分查找
// 返回插入位置
// 即nums[pos - 1] < target <= nums[pos]
export function searchInsert(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while(left <= right) {
        let mid = ((right - left) >> 1) + left;
        if(target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans
}