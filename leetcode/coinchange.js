// 2,5,7, ===> 27

const MAXINT = 100000;
function coinChange(money, total) {
    let dp = new Array(total + 1);
    dp[0] = 0;
    for (var i = 1; i <= total; i++) {
        dp[i] = MAXINT;
        for (var j = 0; j < money.length; j++) {
            if (i >= money[j]) {
                dp[i] = Math.min(dp[i], dp[i - money[j]]+1);
            }
        }
    }
    if (dp[total] >= MAXINT) {
        return -1;
    }
    return dp[total];
}

var c = coinChange([2, 5, 7], 27)
console.log(c);