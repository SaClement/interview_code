import { ListNode, singlyLinkedList } from "../../utils";

function removeElement(node: ListNode, val: number): ListNode {
  if (node == null) {
    return node;
  }
  node.next = removeElement(<ListNode>node.next, val);
  return node.data == val ? node.next : node;
}

function removeElementWhile(head: ListNode, val: number): ListNode {
  let dummyHead: ListNode = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while(temp.next !== null) {
    if(temp.next.data == val) {
      temp.next = temp.next.next;
    }else{
      temp = temp.next;
    }
  }
  return dummyHead;
}

let nodeList1 = new singlyLinkedList()
let nodeList2 = new singlyLinkedList()
let arr = [1, 2, 6, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5];
arr.forEach(item => {
  nodeList1.append(item);
})
arr2.forEach(item => {
  nodeList2.append(item);
})
