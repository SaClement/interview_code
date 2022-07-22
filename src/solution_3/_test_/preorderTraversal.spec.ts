import { BinarySearchTree, TreeNode } from "../../utils"
import { preorderTraversal } from "../src/preorderTraversal"

describe('preorderTraversal', () => {
  test('preorder Traversal', () => {
    let arr = [1,null,2,3]
    let tree = new BinarySearchTree()
    for(let key of arr) {
      tree.insert(key)
    }
    let root = tree.getRoot()
    expect(preorderTraversal(root as TreeNode<number>)).toEqual([1, 2, 3])
  })
})