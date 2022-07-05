export function isPalindrome (num: number): boolean {
  // 判断数字是小数或者负数，返回false
  if(num < 0 || ( num % 10 == 0 && num !== 0)) {
    return false
  }

  let revertedNum: number = 0;
  while( num > revertedNum) {
    revertedNum = revertedNum * 10 + num % 10;
    num = Math.floor(num / 10)
  } 

  return num === revertedNum || num === Math.floor(revertedNum / 10)
}