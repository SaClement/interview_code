import { ListNode } from '../../utils'


export function hasCycle(head: ListNode): boolean {
  let nodeMap = new Map();
  let currentNode: ListNode = head
  while (currentNode !== null) {
    if (nodeMap.has(head.data)) {
      return true;
    }
    currentNode = <ListNode>head.next
    nodeMap.set(head, head.data)
  }
  return false;
}

export function kuickSlowHasCycle(head: ListNode): boolean {
  if (head == null || head.next == null) {
    return false;
  }
  let slow: ListNode = head;
  let quick: ListNode = head.next;
  while (slow != quick) {
    if (quick == null || quick.next == null) {
      return false
    }
    slow = <ListNode>slow.next;
    quick = <ListNode>quick.next.next;
  }
  return true;
}