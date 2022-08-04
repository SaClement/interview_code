import { ListNode } from "../../utils";

function middleNode(head: ListNode) {
  // 借用数组存储链表长度
  let arr: ListNode[] = [head];
  let len = arr.length;
  while (arr[len - 1].next != null) {
    arr.push(arr[len - 1].next as ListNode)
    len = arr.length;
  }
  return arr[Math.trunc(len / 2)]
}

function middleNodeOne(head: ListNode) {
  // 先获取链表的长度
  let n = 0;
  let cur = head;
  while (cur) {
    ++n
    cur = cur.next as ListNode;
  }
  //查找中间node
  let k = 0;
  cur = head;
  while (k < Math.trunc(n / 2)) {
    ++k;
    cur = cur.next as ListNode
  }
  return cur
}

function middleNodeTwo(head: ListNode) {
  // 快慢两个指针，快指针每次走两步，慢指针每次走一步，那么当快指针走到末尾时，慢指针刚好走到中间位置
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next?.next as ListNode
    slow = slow.next as ListNode
  }
  return slow
}

