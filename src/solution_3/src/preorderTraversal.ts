import { Stack, TreeNode } from "../../utils";

export function preorderTraversal(root: TreeNode<number>) {
  let nodeArr = new Array();
  if (root == null) {
    return nodeArr
  }

  let stack: Stack<TreeNode<number>> = new Stack();
  let node: TreeNode<number> = root
  while (!stack.isEmpty() || node != null) {
    while(node && node.key != null) {
      nodeArr.push(node.key);
      stack.push(node);
      node = node.left as TreeNode<number>;
    }
    node = stack.pop() as TreeNode<number>;
    node = node.right as TreeNode<number>;
  }
  return nodeArr
}