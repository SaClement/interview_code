// function combine(n, k) {
//   let ret = new Array()
//   let i = 1
//   if (k > n) {
//     return ret
//   }
//   while (i < n) {
//     let item = new Array(k).fill(0)
//     for (let j = 0; j < k; j++) {
//       if (n > i && n >= i + j) {
//         item[j] = i + j
//       }
//     }
//     i++
//     ret.push(item)
//   }
//   return ret
// }

function combine(n, k) {
  const temp: number[] = [];
  const ans: number[][] = [];
  for (let i = 1; i <= k; ++i) {
    temp.push(i);
  }
  // temp.push(n + 1);

  let j = 0;
  while (j < k) {
    ans.push(temp.slice(0, k));
    j = 0;
    while (j < k && temp[j] + 1 == temp[j + 1]) {
      temp[j] = j + 1;
      ++j;
    }
    ++temp[j];
  }
  return ans
}