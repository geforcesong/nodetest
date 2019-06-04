var mySqrt = function(x) {
    let cur = x, up = x, low = 0;
    while (Math.abs(cur ** 2 - x) > 0.01) {
        if (cur ** 2 > x) {
            up = cur
            cur = low + (cur - low) / 2
        } else {
            low = cur;
            cur = up - (up - cur) / 2
        }
    }
    return Math.floor(cur);
};

console.log(mySqrt(8));