function titleToNumber(columnTitle: string) {
  let number: number = 0;
  let multiple: number = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let charAtNumber: number = columnTitle.charCodeAt(i)
    let k = charAtNumber - 'A'.charCodeAt(0) + 1
    number += k * multiple;
    multiple *= 26;
  }
  return number
}