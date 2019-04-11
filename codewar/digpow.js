function digPow(n, p) {
    // ...
    var nums = [];
    var num = n;
    while (num) {
        var right = num % 10;
        nums.unshift(right);
        num = Math.floor(num / 10);
    }

    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += Math.pow(nums[i], p + i);
    }

    if (total % n === 0) {
        return total / n;
    }
    return -1;
}

console.log(digPow(89, 1));