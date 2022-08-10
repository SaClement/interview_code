function permute(nums) {
  const res = [], path = []
  backtracking(nums, nums.length, []);
  return res

  function backtracking(n, k, used) {
    if (path.length == k) {
      res.push(Array.from(path) as never);
      return;
    }

    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i] as never);
      used[i] = true;
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
}