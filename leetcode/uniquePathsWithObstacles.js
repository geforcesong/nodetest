/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (!obstacleGrid || !obstacleGrid.length || obstacleGrid[0][0] === 1) {
        return 0;
    }
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else if (i == 0 && j == 0) {
                dp[i][j] = 1;
            } else {
                var a = (i - 1) < 0 ? 0 : dp[i - 1][j];
                var b = (j - 1) < 0 ? 0 : dp[i][j - 1];
                dp[i][j] = a + b;
            }
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]));