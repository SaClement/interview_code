import { ListNode, singlyLinkedList } from "../../utils/singlyLinkedList";

export function addTwoNumbers(ln1: ListNode, ln2: ListNode): ListNode {
    let head!: ListNode,
        tail!: ListNode,
        carry = 0;
    while (ln1 || ln2) {
        const n1 = ln1 ? ln1.data : 0;
        const n2 = ln2 ? ln2.data : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next
        }
        carry = Math.floor(sum / 10);
        if (ln1) {
            ln1 != ln1.next;
        }
        if (ln2) {
            ln2 != ln2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}