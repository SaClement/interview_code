import { TreeNode } from "./Node";

export enum Compare {
  EQUALS = 0,
  BIGGER_THAN =  1,
  LESS_THAN = -1
}

export type ICompareFunction<T> = (a: T, b: T) => number;

export function defaultCompare<T>(a: T, b: T) {
  if (a === b) {
    return Compare.EQUALS;
  } 
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export class BinarySearchTree {
  public root: TreeNode<any> | undefined

  constructor(protected compareFn: ICompareFunction<any> = defaultCompare) {
    this.root = undefined;
  }

  getRoot(): TreeNode<any> | undefined {
    return this.root;
  }

  insert(key: any) {
    if (this.root == null) {
      this.root = new TreeNode(key); //如果根节点不存在则直接新建一个节点
    } else {
      this.insertNode(this.root, key); // 在根节点中找合适的位置插入子节点
    }
  }

  protected insertNode(node: TreeNode<any>, key: any) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key); // 如果当前节点的左节点为空直接插入
      } else {
        this.insertNode(node.left, key); // 从当前节点（左子树）向下递归，找到null位置将其插入
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key); // 当前节点的右子树为null直接插入
      } else {
        this.insertNode(node.right, key); // 从当前节点（右子树）向下递归，找到null位置将其插入
      }
    }
  }

  search(key: any) {
    return this.searchNode(<TreeNode<any>>this.root, key);
  }

  protected searchNode(node: TreeNode<any>, key: any): boolean | TreeNode<any> {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(<TreeNode<any>>node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(<TreeNode<any>>node.right, key);
    } else {
      return true;
    }
  }

  min() {
    return this.minNode(<TreeNode<any>>this.root);
  }

  protected minNode(node: TreeNode<any>): TreeNode<any> {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left
    }
    return current;
  }

  max() {
    return this.maxNode(<TreeNode<any>>this.root);
  }

  protected maxNode(node: TreeNode<any>) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  remove(key: any) {
    this.removeNode(<TreeNode<any>>this.root, key);
  }

  protected removeNode(node: TreeNode<any> | null, key: any) {
    // 正在检测的节点为null，即键不存在于树中
    if (node == null) {
      return null;
    }

    // 不为null,需要在树中找到要移除的键
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // 目标key小于当前节点的值则沿着树的左边找
      node.left = <TreeNode<any>>this.removeNode(<TreeNode<any>>node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) { // 目标key大于当前节点的值则沿着树的右边找
      node.right = <TreeNode<any>>this.removeNode(<TreeNode<any>>node.right, key);
      return node;
    } else {
      // 键等于key,需要处理三种情况
      if (node.left == null && node.right == null) { // 移除一个叶节点,即该节点没有左、右子节点
        node = null; // 将节点指向null来移除它
        return node;
      }

      if (node.left == null) { // 移除一个左侧子节点的节点
        // node有一个右侧子节点，因此需要把对它的引用改为对它右侧子节点的引用
        node = <TreeNode<any>>node.right;
        // 返回更新后的节点
        return node;
      } else if (node.right == null) { // 移除一个右侧子节点的节点
        node = node.left; // node有一个左侧子节点，因此需要把对它的引用改为对它左侧子节点的引用
        return node; // 返回更新后的节点
      }

      // 移除有两个子节点的节点
      const aux = this.minNode(node.right); // 当找到了要移除的节点后,需要找到它右边子树最小的节点,即它的继承者
      node.key = aux.key; // 用右侧子树最小的节点的键去更新node的键
      // 更新完node的键后，树中存在了两个相同的键，因此需要移除多余的键
      node.right = <TreeNode<any>>this.removeNode(node.right, aux.key) // 移除右侧子树中的最小节点
      return node; // 返回更新后的节点
    }
  }

  // 中序遍历
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(<TreeNode<any>>this.root, callback);
  }

  private inOrderTraverseNode(node: TreeNode<any>, callback: Function) {
    if (node != null) {
      this.inOrderTraverseNode(<TreeNode<any>>node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(<TreeNode<any>>node.right, callback);
    }
  }

  // 先序遍历
  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(<TreeNode<any>>this.root, callback);
  }

  private preOrderTraverseNode(node: TreeNode<any>, callback: Function) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(<TreeNode<any>>node.left, callback);
      this.preOrderTraverseNode(<TreeNode<any>>node.right, callback);
    }
  }

  // 后序遍历
  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(<TreeNode<any>>this.root, callback);
  }

  private postOrderTraverseNode(node: TreeNode<any>, callback: Function) {
    if (node != null) {
      this.postOrderTraverseNode(<TreeNode<any>>node.left, callback);
      this.postOrderTraverseNode(<TreeNode<any>>node.right, callback);
      callback(node.key);
    }
  }
}

