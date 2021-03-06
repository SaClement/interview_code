import { TreeNode } from "../../utils";

export function sortedArrayToBST(nums: Array<number>): TreeNode<number> | null {
  // 如果数组长度为0
  if (nums.length === 0) {
    return null;
  }

  return <TreeNode<number>>helper(nums, 0, nums.length - 1);
}

/**
 * 中序遍历
 * @param nums 数组
 * @param left 左节点
 * @param right 右节点
 * @returns
 */
function helper(nums: Array<number>, left: number, right: number): TreeNode<number> {
  // 以中间位置左边的数为根节点
  const mid = (left + right) / 2;

  const root = new TreeNode(nums[mid]);
  root.left = <TreeNode<number>>helper(nums, left, mid - 1);
  root.right = <TreeNode<number>>helper(nums, mid + 1, right);
  return root;
}
