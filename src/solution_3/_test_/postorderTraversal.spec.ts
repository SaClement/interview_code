import { BinarySearchTree, TreeNode } from "../../utils"
import { postOrderTraverse } from "../src/postorderTraversal";

describe('postOrderTraversal', () => {
  test('post order traversal', () => {
    let tree = new BinarySearchTree()
    let arr = [1, null, 2, 3];
    arr.forEach(item => {
      tree.insert(item);
    })
    expect(postOrderTraverse(<TreeNode<number>>tree.getRoot())).toEqual([3, 2, 1])
  })
})