// twoKEY
export function removeDupLicates(orderArr) {
  let n = orderArr.length;
  if (orderArr == null || n == 0) {
    return 0
  }

  let fast = 1,
      slow = 1
  while(fast < n) {
    if(orderArr[fast] !== orderArr[fast - 1]) {
      orderArr[slow] = orderArr[fast]
      ++slow
    }
    ++fast;
  }
  return slow
}