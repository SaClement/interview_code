import { TreeNode } from "../../utils";

export function isSameTree(pTree: TreeNode<any>, qTree: TreeNode<any>) {
  if (pTree == null && qTree == null) {
    return true;
  } else if (pTree == null || qTree == null) {
    return false;
  } else if (pTree.key !== qTree.key) {
    return false;
  } else {
    return isSameTree(<TreeNode<any>>pTree.left, <TreeNode<any>>qTree.left) && isSameTree(<TreeNode<any>>pTree.right, <TreeNode<any>>qTree.right);
  }
}