/**
 * 递归
 * @param head 
 * @returns 
 */
const reverseList = (head) => {
  if (head == null || head.next === null) {
    return head;
  }
  const newHead = reverseList(head.next)
  head.next.next = head;
  head.next = null;
  return newHead;
}

// 迭代
const reverseListTwo = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}