import { ListNode } from "../../utils/listNode";

// 拼接两个链表
export function mergeTwoLists(arrA: Array< string | number >, arrB: Array<string | number>) {
  let resList: Array< string | number > = []
  if ( !arrA.length && !arrB.length ) {
    return resList
  }
  resList = [...arrA, ...arrB].sort()
  return resList
}

// 递归操作
export function mergeTwoSortedLists (list1: ListNode, list2: ListNode) {
  if(list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.data < list1.data){
    list1.next = mergeTwoSortedLists(list1.next, list2)
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next)
    return list2;
  }
}