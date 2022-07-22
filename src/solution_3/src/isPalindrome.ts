export function isPalindrome(str: string) {
  let newStr: string = str.replace(/[^A-Za-z0-9]+/g, '').toLocaleLowerCase()
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] != newStr[newStr.length - i - 1]) {
      return false
    }
  }
  return true
}

export function twoIsPalindrome(str: string): boolean {
  let newStr: string = str.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();
  let i = 0,
      j = newStr.length - 1;
  while(i<j) {
    if(newStr[i] !== newStr[j]) {
      return false
    }
    i++
    j--
  }
  return true
}