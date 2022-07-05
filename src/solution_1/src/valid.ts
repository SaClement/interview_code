// 栈方式处理
const unordered = new Map([
  [')', '('],
  [']', '['],
  ['}', '{']
])

export function isValid( Vstr: string ) {
  let n: number = Vstr.length;
  // 如果Vstr的长度为奇数；返回false
  if (n % 2 == 1) {
    return false;
  }

  let stack: Array<string> = []
  for (let ch of Vstr) {
    // 判断Map中是否含有右括号
    if(unordered.has(ch)) {
      // 判断栈的长度是否大于1,并且栈的最后一个元素是否是Map中对应的左括号,如果不是返回false
      if (!stack.length || unordered.get(ch) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop()
    }else{
      stack.push(ch)
    }
  }
  // 如果栈中没有元素返回true
  return !stack.length
}