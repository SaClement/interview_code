// 最长公共前缀
/**
 * 横向扫描
 */
export function crossLongestPrefix(strs: Array<string>){
  // 如果传入的字符串数组为空或者为null 返回""
  if(strs == null || strs.length == 0) {
    return ""
  }
  let count = strs.length;
  let prefix = strs[0]
  for(let i = 1; i < count; i++){
    prefix = longestCommonPrefix(prefix, strs[i])
    if(prefix.length == 0) {
      break;
    }
  }
  return prefix
}
/**
 * 
 * @param str1 数组中第一个元素
 * @param stri 数组中其他的元素
 * @returns 
 */
function longestCommonPrefix(str1: string, stri: string) {
  let len = Math.min(str1.length, stri.length)
  let index: number = 0
  while(index < len && str1[index] === stri[index]){
    index++
  }
  return str1.slice(0, index)
}

/**
 * 纵向扫描
 * @param {Array<string>} strs 数组对象
 * @returns {string} 最长公共前缀
 */
export function directionLongestPrefix(strs: Array<string>) {
  if(strs == null || strs.length == 0) {
    return "";
  }
  let length = strs[0].length;
  let count = strs.length
  for(let i = 0; i < length; i++) {
    let c = strs[0][i]
    for(let j = 0; j < count; j++) {
      if(i == strs[j].length || strs[j][i] != c) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0];
}
