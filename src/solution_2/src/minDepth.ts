import { TreeNode } from '../../utils'


/**
 * 
 * @param {TreeNode} root 
 * @returns {number}
 */
export function minDepth(root: TreeNode<number>): number {
  if (root == null) {
    return 0;
  }
  if(root.left == null && root.right == null) {
    return 1
  }
  let minDep = Infinity
  if(root.left) {
    minDep = Math.min(minDepth(root.left as TreeNode<number>), minDep);
  }
  if(root.right) {
    minDep = Math.min(minDepth(root.right as TreeNode<number>), minDep);
  }
  console.log(minDep)
  return minDep + 1;
}