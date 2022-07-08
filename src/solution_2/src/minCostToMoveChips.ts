export function minCostToMoveChips(position: Array<number>): number {
  let odd = 0, even = 0;
  for (let obj of position) {
    if ((obj & 1) != 0) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(even, odd)
}