const minimumTotal = (triangle) => {
  const dp = new Array(triangle.length + 1).fill(0);
  for (var i = triangle.length - 1; i >= 0; i--) {
    for (var j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
}