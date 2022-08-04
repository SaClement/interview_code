function removeNthFromEnd(head, n) {
  //先确定链表长度
  let len = 0;
  let cur = head;
  while (cur) {
    ++len;
    cur = cur.next;
  }
  // 排除链表长度等于目标值的情况和链表长度是一的情况
  if (len == 1 || len == n) {
    return head.next;
  }
  let k = 0;
  cur = head;
  while (k < len - n - 1) {
    ++k
    cur = cur.next
  }
  cur.next = cur.next.next
  return head
}

function removeNthFromEndTwo(head, n) {
  let fast = head, slow = head
  while (n--) {
    fast = fast.next
  }
  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};