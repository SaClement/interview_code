import { BinarySearchTree, Stack, TreeNode } from "../../utils";

export function postOrderTraverse(root: TreeNode<number> | null): Array<number> {
  let res: Array<number> = new Array()
  if (root == null) {
    return res
  }
  // 新建一个栈空间 和 设置前一个元素为空
  let stack: Stack<TreeNode<number | null>> = new Stack()
  let prev: TreeNode<number> | null = null
  // 当栈空间不为空时或者root不为null时执行循环
  while (root != null || !stack.isEmpty()) {
    // 当左节点存在向栈空间中添加节点
    while (root && root.key != null) {
      stack.push(root);
      root = root.left as TreeNode<number>
    }
    // 当节点没有左节点时取出栈空间外层节点
    root = stack.pop() as TreeNode<number>;
    // 如果右节点不为空再次入栈，如果右节点为空则设置当前节点为前节点，并push到结果当中
    if (root.right == null || root.right == prev) {
      
      res.push(root.key as number);
      prev = root as TreeNode<number>;
      root = null
    } else {
      stack.push(root);
      root = root.right
    }
  }
  return res
}