import { TreeNode } from "../../utils";

export function isBalanced(root: TreeNode<number>): boolean {
  if (root == null) {
    return true
  } else {
    return isBalanced(root.left as TreeNode<number>) && isBalanced(root.right as TreeNode<number>) && Math.abs(height(root.left) - height(root.right)) <= 1;
  }
}

function height(root): number {
  if (root == null) {
    return 0;
  } else {
    return Math.max(height(root.left), height(root.right)) + 1
  }
}


export function isBalancedFromBottom(root: TreeNode<number>) {
  return heightBack(root as TreeNode<number>) >= 0;
}

function heightBack(root: TreeNode<number> | undefined): number {
  if (!root) {
    return 0
  }
  let lh = heightBack(root?.left);
  let rh = heightBack(root?.right);
  if (lh === -1 || rh === -1 || Math.abs(lh - rh) > 1) {
    return -1;
  } else {
    return Math.max(lh, rh) + 1
  }
}