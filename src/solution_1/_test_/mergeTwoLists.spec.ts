import { singlyLinkedList } from "../../utils";
import { mergeTwoSortedLists } from "../src/mergeTwoLists"

describe("mergeTwoLists", () => {
  test("merge two lists", () => {
    let l1 = [1,2,4];
    let l2 = [1,3,4];
    let slist1 = new singlyLinkedList(), 
        slist2 = new singlyLinkedList();
    for (let i = 0; i < l1.length; i++) {
      slist1.append(l1[i])
    }
    for (let i = 0; i < l2.length; i++) {
      slist2.append(l2[i])
    }
    // console.log(JSON.stringify(mergeTwoSortedLists(slist1.head ,slist2.head)))


    // expect(mergeTwoSortedLists(slist1.head ,slist2.head)).toEqual([1,1,2,3,4,4])
  })
})