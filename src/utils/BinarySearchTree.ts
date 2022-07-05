import { Node } from "./Node";

export type ICompareFunction<T> = (a: T, b: T) => number;

interface Compare {
  EQUALS: 1,
  BIGGER_THAN: 2,
  LESS_THAN: 3
}

export function defaultCompare<T>(a: T, b: T) {
  if (a === b) {
    return Compare.EQUALS;
  } else if (a > b) {
    return Compare.BIGGER_THAN;
  } else {
    return Compare.LESS_THAN;
  }
}

export class BinarySearchTree {
  protected root: Node<T> | undefined

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.root = undefined;
  }

  insert(key: T) {
    if (this.root == null) {
      this.root = new Node(key); //如果根节点不存在则直接新建一个节点
    } else {
      this.insertNode(this.root, key); // 在根节点中找合适的位置插入子节点
    }
  }

  protected insertNode(node: Node<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key); // 如果当前节点的左节点为空直接插入
      } else {
        this.insertNode(node.left, key); // 从当前节点（左子树）向下递归，找到null位置将其插入
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key); // 当前节点的右子树为null直接插入
      } else {
        this.insertNode(node.right, key); // 从当前节点（右子树）向下递归，找到null位置将其插入
      }
    }
  }

  search(key: T) {
    return this.searchNode(<Node<T>>this.root, key);
  }

  protected searchNode(node: Node<T>, key: T): boolean | Node<T> {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(<Node<T>>node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(<Node<T>>node.right, key);
    } else {
      return true;
    }
  }

  min() {
    return this.minNode(<Node<T>>this.root);
  }

  protected minNode(node: Node<T>): Node<T> {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left
    }
    return current;
  }

  max() {
    return this.maxNode(<Node<T>>this.root);
  }

  protected maxNode(node: Node<T>) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  remove(key: T) {
    this.removeNode(<Node<T>>this.root, key);
  }

  protected removeNode(node: Node<T> | null, key: T) {
    // 正在检测的节点为null，即键不存在于树中
    if (node == null) {
      return null;
    }

    // 不为null,需要在树中找到要移除的键
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // 目标key小于当前节点的值则沿着树的左边找
      node.left = <Node<T>>this.removeNode(<Node<T>>node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) { // 目标key大于当前节点的值则沿着树的右边找
      node.right = <Node<T>>this.removeNode(<Node<T>>node.right, key);
      return node;
    } else {
      // 键等于key,需要处理三种情况
      if (node.left == null && node.right == null) { // 移除一个叶节点,即该节点没有左、右子节点
        node = null; // 将节点指向null来移除它
        return node;
      }

      if (node.left == null) { // 移除一个左侧子节点的节点
        // node有一个右侧子节点，因此需要把对它的引用改为对它右侧子节点的引用
        node = <Node<T>>node.right;
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
      node.right = <Node<T>>this.removeNode(node.right, aux.key) // 移除右侧子树中的最小节点
      return node; // 返回更新后的节点
    }
  }

  // 中序遍历
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(<Node<T>>this.root, callback);
  }

  private inOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node != null) {
      this.inOrderTraverseNode(<Node<T>>node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(<Node<T>>node.right, callback);
    }
  }

  // 先序遍历
  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(<Node<T>>this.root, callback);
  }

  private preOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(<Node<T>>node.left, callback);
      this.preOrderTraverseNode(<Node<T>>node.right, callback);
    }
  }

  // 后序遍历
  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(<Node<T>>this.root, callback);
  }

  private postOrderTraverseNode(node: Node<T>, callback: Function) {
    if (node != null) {
      this.postOrderTraverseNode(<Node<T>>node.left, callback);
      this.postOrderTraverseNode(<Node<T>>node.right, callback);
      callback(node.key);
    }
  }
}

