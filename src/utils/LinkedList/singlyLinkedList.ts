export interface ListNode {
  prev: ListNode | null
  next: ListNode | null
  data: any
}

export interface singlyLinkedList {
  head: any
  size: number
  currentNode: ListNode | null
  find(item: any): ListNode | null // 在单链表中查找item元素
  insert(element: any, item: any): void //向链表中插入一个元素
  remove(item: any): void // 删除一个节点
  append(element: any): void // 在链表的末尾添加元素
  findLast(): ListNode //获取单链表的最后一个节点
  isEmpty(): boolean // 判断是否为空
  show(): void //显示当前节点
  getLength(): number // 获取单链表的长度
  advance(n: number, currNode: ListNode): void // 从当前节点向前移动N个位置
  display(): void // 链表的遍历显示
  clear(): void // 清空单链表
}

export class ListNode {
  prev: ListNode | null = null
  next: ListNode | null = null
  constructor(data: any) {
    this.data = data ? data : null;
  }
}

/**
 * 单向链表
 */
export class singlyLinkedList {
  head: any = null
  size: number = 0
  currentNode: ListNode | null = null
  constructor() {
    this.head = new ListNode('head');
  }

  find(item: any): ListNode | null {
    let currNode = this.head
    while (currNode) {
      if (currNode.data === item) {
        return currNode
      }
      currNode = currNode.next;
    }
    return null
  }

  insert(element: any, item: any): void {
    if (!this.find(element)) {
      return;
    }
    let prevNode = this.find(element); //找到前一个节点
    if (prevNode === null) {
      return;
    }
    let currNode = new ListNode(item);
    currNode.next = prevNode.next;
    prevNode.next = currNode;
    this.size++;
  }

  remove(item: any): void {
    if (!this.find(item)) {
      return;
    }
    if (item === 'head') {
      if (!this.isEmpty()) {
        return;
      } else {
        this.head.next = null;
        return;
      }
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode && currNode.next.data === item) {
        break;
      }
      currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    this.size--;
  }

  append(element: any): void {
    let rears = this.findLast();
    let currentNode = new ListNode(element);
    rears.next = currentNode;
    this.size++;
  }

  findLast(): ListNode {
    let currNode: ListNode = this.head
    if (currNode.next) {
      currNode = currNode.next
    }
    return currNode
  }

  isEmpty(): boolean {
    if (this.head.next) {
      return true;
    }
    return false;
  }

  show(): void {
    console.log(this.currentNode?.data);
  }
  getLength(): number {
    let index = 0;
    let currNode = this.head;
    while (currNode) {
      index++;
      currNode = currNode.next;
    }
    return index
  }

  advance(n: number, currNode: ListNode = this.head): ListNode {
    this.currentNode = currNode;
    while ((n--) && this.currentNode.next) {
      this.currentNode = this.currentNode?.next
    }
    return this.currentNode
  }

  display(): void {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  clear(): void {
    this.head.next = null;
    this.size = 0
  }
}

// 实现单循环链表
export class circularLikedNode extends singlyLinkedList {
  constructor() {
    super()
  }

  findLast(): ListNode {
    // 使用count来计算链表的长度
    let count = 0;
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
      count++;
      // 当计算的长度等于链表的长度时，即为最后一个节点
      if (count === this.size) {
        return currNode;
      }
    }
    return this.head;
  }

  find(item: any): ListNode {
    let lastNode = this.findLast();
    let currNode = this.head;
    while (currNode.data !== item) {
      // 如果当前节点等于最后一个子节点，即为没有找到，返回null
      if (currNode == lastNode) {
        currNode = null;
        break;
      }
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(item: any, element: any) {
    let newNode = new ListNode(element);
    let itemNode = this.find(item);
    let lastNode = this.findLast();
    // 如果item是头结点，那么就直接插入，并且自己指向自己
    if (item === 'head') {
      if (this.size === 0) {
        this.head.next = newNode;
        newNode.next = newNode;
      } else {
        // 如果当前链表不为空，将新节点指向头节点的下一个节点，然后将头节点指向新节点，尾节点指向新节点
        newNode.next = this.head.next
        this.head.next = newNode;
        lastNode.next = newNode;
      }
      this.size++;
      return;
    }
    // 不是头结点的情况下，直接正常插入
    newNode.next = itemNode.next;
    itemNode.next = newNode;
    this.size++
  }

  remove(item: any): void {
    let lastNode = this.findLast();
    let itemNode = this.find(item);
    let preCurNode = this.head;
    while (preCurNode.next !== itemNode) {
      preCurNode = preCurNode.next
    }
    if (itemNode === this.head.next) {
      if (this.size === 1) {
        this.head.next = null;
      } else {
        this.head.next = itemNode.next;
        lastNode.next = itemNode.next
      }
    } else {
      preCurNode.next = itemNode.next;
    }
    this.size--;
  }

  display(): void {
    let count = 0;
    let currNode = this.head;
    let str = "";
    while (count !== this.size) {
      currNode = currNode.next;
      str += currNode.data + '=>';
      count++;
    }
    console.log(str);
  }

  append(element: any): void {
    let lastNode = this.findLast();
    let newNode = new ListNode(element);
    lastNode.next = newNode;
    newNode.next = this.head.next;
    this.size++;
  }
}

// 双向链表
export class DoublyLinkedList {
  head: ListNode | any = null
  tail: ListNode | any = null
  size: number = 0
  currentNode: ListNode | null = null

  constructor() {
    this.head = new ListNode('head');
    this.tail = new ListNode('tail')
  }

  insert() {

  }
}