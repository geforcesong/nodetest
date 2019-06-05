function uniquePath(m, n) {
    let dp = new Array(m);
    for (let index = 0; index < dp.length; index++)
        dp[index] = new Array(n);

    for (var i = 0; i < dp.length; i++) {
        for (j = 0; j < dp[i].length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
}

console.log(uniquePath(3, 5));