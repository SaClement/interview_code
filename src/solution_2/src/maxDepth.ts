/** 深度优先搜索 */
export function maxDepth(root) {
  if (root == null) {
    return 0
  } else {
    let leftH = maxDepth(root.left);
    let rightH = maxDepth(root.right);
    return Math.max(leftH, rightH) + 1
  }
}

/** 广度优先搜索 */
export function queueMaxDepth(root) {
  if (root == null) {
    return 0
  }
  // 声明一个队列queue
  // TODO
}