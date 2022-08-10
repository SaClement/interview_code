const letterCasePermutation = (s) => {
  const len = s.length;
  let res = [];

  function isChar(s) {
    const value = s.charCodeAt();
    if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)) return true;
    return false;
  }

  function helper(temp, i) {
    if (temp.length === len) {
      res.push(temp as never);
      return;
    }

    if (isChar(s[i])) {
      helper(temp + s[i].toUpperCase(), i + 1)
      helper(temp + s[i].toLowerCase(), i + 1)
    } else {
      helper(temp + s[i], i + 1)
    }
  }

  helper('', 0)
  return res
}

console.log(letterCasePermutation('a1b2'))