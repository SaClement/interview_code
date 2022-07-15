export function getRow(rowIndex: number): any {
  const retArr: Array<any> = new Array(rowIndex + 1).fill(0);
  for (let i = 0; i <= rowIndex; ++i) {
    retArr[i] = new Array(i + 1).fill(0);
    retArr[i][0] = retArr[i][i] = 1
    for (let j = 1; j < i; j++) {
      retArr[i][j] = retArr[i - 1][j - 1] + retArr[i - 1][j];
    }
  }
  return retArr[rowIndex]
}

export function getRowPreAndCur(rowIndex: number): any {
  let pre: Array<number> = [],
    cur: Array<number> = [];
  for (let i = 0; i <= rowIndex; ++i) {
    cur = new Array(i + 1).fill(0);
    cur[0] = cur[i] = 1
    for (let j = 1; j < i; ++j) {
      cur[j] = pre[j - 1] + pre[j];
    }
    pre = cur;
  }
  return pre
}

export function getRowOneArr(rowIndex: number): any {
  const row: Array<number> = new Array(rowIndex + 1).fill(0);
  row[0] = 1
  for (let i = 0; i <= rowIndex; ++i) {
    for (let j = i; j > 0; --j) {
      row[j] += row[j - 1]
    }
  }
  return row
}

// 线性递推
export function getRowLine(rowIndex: number): any {
  const row: Array<number> = new Array(rowIndex + 1).fill(0);
  row[0] = 1
  for (let i = 0; i <= rowIndex; ++i) {
    row[i] = row[i - 1] * (rowIndex - i + 1) / i;
  }
  return row
}