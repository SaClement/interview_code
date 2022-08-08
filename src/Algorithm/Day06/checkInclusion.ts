function checkInclusion(s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) {
    return false;
  }
  // 声明一个长度为26的数组记录S1中每个字符出现的次数
  const arr = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    --arr[s1[i].charCodeAt() - 'a'.charCodeAt(0)];
  }
  
  let left = 0;
  for (let right = 0; right < m; ++right) {
    const x = s2[right].charCodeAt() - 'a'.charCodeAt(0);
    ++arr[x];
    while (arr[x] > 0) {
      --arr[s2[left].charCodeAt() - 'a'.charCodeAt(0)];
      ++left;
    }
    if (right - left + 1 === n) {
      return true;
    }
  }
  return false;
}

console.log(checkInclusion("ab", "eidboaoo"))