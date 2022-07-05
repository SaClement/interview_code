export enum symbolValue {
  "I" = 1,
  "V" = 5,
  "X" = 10,
  "L" = 50,
  "C" = 100,
  "D" = 500,
  "M" = 1000,
}

export function romanToInt(romanStr: string) {
  let num: number = 0;
  let n = romanStr.length;

  for(let i = 0; i < n; ++i) {
    let val = symbolValue[romanStr[i]]
    if(i < n-1 && val < symbolValue[romanStr[i+1]]) {
      num -= val
    }else{
      num += val
    }
  }
  
  return num
}