export function strStr(haystack, needle) {
  let hL = haystack.length,
      nL = needle.length;
  if (nL == 0) {
    return 0
  }

  for (let i = 0; i + nL <= hL; i++) {
    let flag = true;
    for(let j = 0; j < nL; j++) {
      if(haystack[i + j] != needle[j]) {
        flag = false
        break
      }
    }
    if(flag) {
      return i;
    }
  }

  return -1;
}

// kmp 算法
export function strStrKMP(haystack, needle) {
  let hl = haystack.length,
      nl = needle.length
  if (nl === 0) 0;
  // 生成一个和needle长度相同且所有元素为0的数组
  let piArr = new Array(nl).fill(0)
  // 求解前缀函数
  for(let i = 1, j = 0; i < nl; i++) {
    while(j > 0 && needle[i] != needle[j]) {
      j = piArr[j - 1]
    }
    if (needle[i] == needle[j]) {
      j++
    }
    piArr[i] = j
  }
  // console.log(piArr,'KMP')

  for (let i = 0, j = 0; i < hl; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = piArr[j - 1];
    }
    if(haystack[i] == needle[j]) {
      j++
    }
    if(j === nl) {
      return i - nl + 1
    }
  }
  return -1;
}