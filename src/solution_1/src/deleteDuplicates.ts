export function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  let currNode = head;
  while (currNode && currNode.size) {
    if (currNode.data === currNode.next?.data) {
      currNode.next = currNode.next?.next;
      currNode.size--
    } else {
      currNode = currNode.next;
    }
  }
  return head;
}