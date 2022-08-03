function reverseString(s) {
  let temp, left = 0, right = s.length - 1;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp
    left++
    right--
  }
  return s
}

function reverseWords(s: string) {
  const ret = [];
  const len = s.length;
  let i: number = 0;
  while (i < len) {
    let start: number = i;
    while (i < len && s.charAt(i) != " ") {
      i++;
    }
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p) as never);
    }
    while(i < len && s.charAt(i) == " "){
      i++;
      ret.push(" "  as never);
    }
  }
  return ret.join('')
}

console.log(reverseWords("Let's take LeetCode contest"));
