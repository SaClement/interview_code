import { ListNode } from "../../utils";

export function getIntersectionNode(headA: ListNode, headB: ListNode) {
  let hashMap: Map<any, ListNode> = new Map();
  let currentNode: ListNode | null = headA;
  while (currentNode != null) {
    hashMap.set(headA.data, headA);
    currentNode = currentNode.next;
  }
  currentNode = headB;
  while (currentNode !== null) {
    if (hashMap.has(currentNode.data)) {
      return currentNode.data;
    }
    currentNode = currentNode.next;
  }
  return null;
}

/**
 * 双指针 - 找到相交节点
 * @param headA - 链表A头节点
 * @param headB - 链表B头节点
 * @returns 
 */
export function getKeyIntersectionNode(headA: ListNode, headB: ListNode): number | null {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA.data !== pB.data) {
    pA = pA === null ? headB : <ListNode>pA.next;
    pB = pB === null ? headA : <ListNode>pB.next;
  }
  return pA.data;
}
