import { BinarySearchTree, TreeNode } from '../../utils'
import { isBalanced, isBalancedFromBottom } from '../src/isBalanced';

describe("isBalanced", () => {
  test('to judge balanced', () => {
    let rootArr = [3, 9, 20, null, null, 15, 7];
    let rootTree = new BinarySearchTree()

    rootArr.forEach(item => {
      rootTree.insert(item)
    })
    // expect(isBalanced(rootTree.root as TreeNode<number>)).toBe(true)
    expect(isBalancedFromBottom(rootTree.root as TreeNode<number>)).toBe(true)
  })
})