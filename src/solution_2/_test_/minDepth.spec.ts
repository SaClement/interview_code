import { BinarySearchTree, TreeNode } from "../../utils"
import { minDepth } from "../src/minDepth";

describe("minDepth", () => {
  test("min depth", () => {
    let rootArr = [3, 9, 20, null, null, 15, 7];
    let rootArr2 = [2, null, 3, null, 4, null, 5, null, 6];
    let rootTree = new BinarySearchTree();
    let rootTree2 = new BinarySearchTree();
    rootArr.forEach(item => {
      rootTree.insert(item);
    })
    rootArr2.forEach(key => {
      rootTree2.insert(key);
    })
    expect(minDepth(<TreeNode<number>>rootTree.root)).toBe(2)
    expect(minDepth(<TreeNode<number>>rootTree2.root)).toBe(5)
  })
})