import { singlyLinkedList } from "../../utils"
import { deleteDuplicates } from "../src/deleteDuplicates"

describe("delete Duplicates", () => {
  test("delete", () => {
    let head = new singlyLinkedList()
    let result = new singlyLinkedList()
    let arr = [1, 1, 2, 2, 3, 4];
    let resArr = [1, 2, 3, 4]
    for (let i = 0; i < arr.length; i++) {
      head.append(arr[i]);
    }
    for (let i = 0; i < resArr.length; i++) {
      result.append(resArr[i]);
    }
    // expect(deleteDuplicates(head)).toEqual(result);
  })
})