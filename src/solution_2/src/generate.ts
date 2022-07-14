export function generate(numRows: number): Array<Array<number>> {
  const ret: Array<Array<number>> = []

  for (let i = 0; i < numRows; i++) {
    let row: Array<number> = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      // 根据前一行的数据生成下一行的数据
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
}