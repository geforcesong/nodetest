function sumDigPow(a, b) {
    const ret = [];
    for (var num = a; num < b; num++) {
        const digits = num.toString().split('');
        let sum = 0;
        for (var i = 0; i < digits.length; i++) {
            sum += Math.pow(parseInt(digits[i]), i + 1);
        }
        if (sum === num) {
            ret.push(num);
        }
    }
    return ret;
}

console.log(sumDigPow(1, 100));