/**
 * climbStairs - 爬楼梯
 * @param stairNum 楼梯的数量
 */
export function climbStairs (stairNum: number) {
  // 动态规划
  let p = 0,
      q = 0,
      r = 1;
  for (let i = 0; i < stairNum; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

// 通项公式
export function normalClimbStairs (stairNum: number) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5) / 2, stairNum + 1) - Math.pow((1 - sqrt5) / 2, stairNum + 1);
  return Math.round(fibn / sqrt5)
}

// 矩阵快速幂
export function matrixClimbStairs (stairNum: number) {
  const q = [[1, 1],[1, 0]];
  const res = pow(q, stairNum);
  return res[0][0]
}

function pow (a: Array<any>, n: number) {
  let ret = [[1, 0], [0, 1]]
  while (n > 0) {
    if ((n & 1) === 1) {
      ret = multiply(ret, a);
    }
    n >>= 1;
    a = multiply(a, a);
  }
  return ret;
}

function multiply (a, b) {
  const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }
  return c;
}

// 递归
export function recursionClimbStairs(stairNum) {
  let memory = {};
  let res = function dp(n) {
    if (n == 1 || n == 2) {
      return n;
    }
    if (memory[n - 2] === undefined) {
      memory[n - 2] = dp(n - 2)
    }
    if (memory[n - 1] === undefined) {
      memory[n - 1] = dp(n - 1)
    }
    return memory[n] =  memory[n - 1] + memory[n - 2]
  }
  return res(stairNum)
}