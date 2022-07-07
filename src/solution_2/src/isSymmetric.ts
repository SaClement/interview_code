import { TreeNode } from "../../utils";


// 递归操作
export function isSymmetric(root: TreeNode<any>): boolean {
  return check(root, root)
}

const check = (pRoot: TreeNode<any> | null, qRoot: TreeNode<any> | null): boolean => {
  if (!pRoot && !qRoot) return true;
  if (!pRoot || !qRoot) return false;
  return pRoot.key === qRoot.key
    && check(<TreeNode<any>>pRoot.left, <TreeNode<any>>qRoot.right)
    && check(<TreeNode<any>>pRoot.right, <TreeNode<any>>qRoot.left);
}

// 迭代操作
const iterationCheck = (uRoot: TreeNode<any> | null, vRoot: TreeNode<any> | null): boolean => {
  const qNode: (TreeNode<any> | null)[] = [];
  qNode.push(uRoot), qNode.push(vRoot);
  while(qNode.length) {
    uRoot = qNode.shift()!;
    vRoot = qNode.shift()!;

    if(!uRoot && !vRoot) continue;
    if((!uRoot || !vRoot) || (uRoot.key != vRoot.key)) return false;

    qNode.push(<TreeNode<any>>uRoot.left);
    qNode.push(<TreeNode<any>>vRoot.right);

    qNode.push(<TreeNode<any>>uRoot.right);
    qNode.push(<TreeNode<any>>vRoot.left);
  }
  return true;
}