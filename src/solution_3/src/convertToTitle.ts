function convertToTitle(columnNumber: number) {
  let arr: Array<string> = [];
  let code: string = "";
  const charCodeA: number = "A".charCodeAt(0);
  while (columnNumber !== 0) {
    columnNumber--;
    code = String.fromCharCode(columnNumber % 26 + charCodeA);
    arr.unshift(code);
    columnNumber = Math.floor(columnNumber / 26)
  }
  return arr.join('')
}

console.log(convertToTitle(701))

