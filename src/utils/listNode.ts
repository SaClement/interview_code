export class ListNode {
  public data?: any
  public next?: null | any

  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class singleLinked {
  private size: number
  public head: ListNode
  public currentNode

  constructor() {
    this.size = 0 //记录单链表的长度或节点个数 
    this.head = new ListNode("head") // 记录链表的头指针，主要作用记录链表的起始地址
    this.currentNode = "" // 用来记录当前节点
  }

  getLength() { // 获取链表长度
    return this.size
  }

  isEmpty() { // 判断是否为空链表
    return this.size === 0
  }

  displayList() {
    var list = ''
    var currentNode = this.head
    // 如果当前节点不为空，表明当前节点中存在数据
    while (currentNode) {
      list += currentNode.data
      currentNode = currentNode.next // 让节点指向下一个节点
      if(currentNode) {
        list += '->'
      }
    }
    console.log(list);
  }

  findLast() { //获取链表最后一个节点
    var currNode = this.head;
    if (currNode.next) {
      currNode = currNode.next
    }
    return currNode
  }

  appendNode(element) {
    let currNode = this.findLast() // 找到最后一个节点
    let newNode = new ListNode(element) // 新建一个链表节点
    currNode.next = newNode // 把新建的节点加载最后一个节点的后面
    newNode.next = null // 新节点已经是最后一个节点了

    this.size++ // 因为新加入一个节点，所以原来的链表长度+1
  }

  deleteList(element) {
    let currNode = this.head;
    while (currNode.next.data !== element) {
      currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    this.size--
  }
}