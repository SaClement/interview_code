function isIsomorphic(s, t) {
  let s2t = {};
  let t2s = {};
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    const x = s[i],
      y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false;
    }
    s2t[x] = y;
    t2s[y] = x;
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
