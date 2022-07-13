import { TreeNode } from "../../utils";

export function hasPathSum(root: TreeNode<number>, targetNum: number): boolean {
  if (root == null) {
    return false;
  }
  const queNode: Array<TreeNode<number>> = [];
  const queVal: Array<number> = [0]
  queNode.push(root);
  queVal.push(root.key);
  while (queNode.length) {
    let currNode = queNode.shift();
    const temp: number = <number>queVal.shift();
    if (currNode?.left == null && currNode?.right == null) {
      if (temp == targetNum) {
        return true;
      }
      continue;
    }
    if (currNode.left != null) {
      queNode.push(currNode.left);
      queVal.push(currNode.left.key + temp);
    }
    if(currNode.right !=null) {
      queNode.push(currNode.right);
      queVal.push(currNode.right.key + temp);
    }
  }
  return false;
}

// 求差值 用总和targetSum一个一个减去节点值
export function diffHasPathSum(root: TreeNode<number>, targetNum: number): boolean {
  if (!root) false;
  if (!root.left && !root.right) {
    return targetNum === root.key;
  }
  return diffHasPathSum(<TreeNode<number>>root.left, targetNum - root.key) || diffHasPathSum(<TreeNode<number>>root.right, targetNum - root.key);
}