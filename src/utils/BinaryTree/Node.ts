export class TreeNode<K> {
  public left: TreeNode<K> | undefined;
  public right: TreeNode<K> | undefined;
  
  constructor(public key: K){
    this.left = undefined;
    this.right = undefined;
  }

  toString() {
    return `${this.key}`
  }
}