export function lengthOfLastWord (normalStr) {
  if(normalStr == null || normalStr.length == 0) {
    return 0
  }
  let normalArr = normalStr.split(' ');
  return normalArr[normalArr.length - 1].length
}