function majorityElement(nums: Array<number>) {
  let setArr: Array<number> = Array.from(new Set(nums));
  let times: Array<number> = [];
  for (let i = 0; i < setArr.length; i++) {
    let count: number = 0;
    nums.forEach((item) => {
      if ((item = setArr[i])) {
        ++count;
      }
    });
    times.push(count);
  }
  // 返回出现次数最多的下标
  let index = 0;
  for (let i = 0; i < times.length; i++) {
    times[index] = times[i];
    index = i;
  }
  return times[index]
}
