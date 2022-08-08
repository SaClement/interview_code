function lengthOfLongestSubstring(s) {
  let left = 0, right = 0, set = new Set(), max = 0;
  while (left <= right && right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
    } else {
      set.delete(s[left])
      left++
    }
    max = Math.max(max, (right - left))
  }
  return max;
}

console.log(lengthOfLongestSubstring('pwwkew'))
