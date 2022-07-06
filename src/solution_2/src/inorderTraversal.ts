import { TreeNode, BinarySearchTree } from "../../utils";

/**
 * 递归 - 中序遍历
 * @param root 根节点
 * @returns 
 */
export function inorderTraversal(root: TreeNode<any>) {
  const res = new BinarySearchTree();
  const inorder = (root) => {
    if (!root) {
      return
    }
    inorder(root.left);
    res.insert(root.key);
    inorder(root.right);
  }
  inorder(root);
  return res
}

export function iterationInorderTraversal(root) {
  const res: Array<any> = []; // 结果
  const stk: Array<any> = []; // 栈空间
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}


// morris中序
export function morrisInorderTraversal(root) {
  const res: Array<any> = [];
  let predecessor: TreeNode<any> = new TreeNode(root.key);

  while (root) {
    if (root.left) {
      // predecessor节点就是当前root节点向左走一步，然后一直向右走到无法自走为止
      predecessor = root.left;
      while (predecessor.right && predecessor.right != root) {
        predecessor = predecessor.right;
      }

      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left
      } else {
        res.push(root.val);
        predecessor.right = undefined;
        root = root.right;
      }
    } else {
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
}