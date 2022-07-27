export function hammingWeight(n: number) {
  let ret: number = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      ret++
    }
  }
  return ret
}

function hammingWeightBit(n: number) {
  let ret: number = 0;
  while (n) {
    n &= (n - 1)
    ret++
  }
  return ret
}
console.log(hammingWeightBit(0b11111111111111111111111111111101))