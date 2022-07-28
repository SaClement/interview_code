/**
 * 判断是否是快乐数
 * @param {number} n - 数字
 * @returns {boolean} - 是否是快乐数
 */
export function isHappy(n: number): boolean {
  let seen = new Set()
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  return n === 1
}

export function getNext(n: number): number {
  let totalSum: number = 0;
  while (n > 0) {
    let d = n % 10
    n = Math.floor(n / 10)
    totalSum += d ** 2
  }
  return totalSum;
}