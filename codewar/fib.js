function fib(n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    n++;
    var pre2 = [0];
    var pre1 = [1];
    var cur = [];
    for (var i = 2; i <= n; i++) {
        cur = add(pre1 , pre2);
        pre2 = pre1;
        pre1 = cur;
    }
    return cur.join('');
}

function add(arr1, arr2) {
    let len = Math.max(arr1.length, arr2.length);
    let ret = [], m = arr1.length - 1, n = arr2.length - 1, carry = 0;
    for (var i = 0; i < len; i++) {
        let tmp = (arr1[m--] || 0) + (arr2[n--] || 0) + carry;
        carry = Math.floor(tmp / 10);
        ret.unshift(tmp % 10);
    }
    while (carry) {
        ret.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return ret;
}





function fib2(n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    return fib2(n-2) +fib2(n-1)
}

var num = 2000000
console.log(fib(num));
// console.log(fib2(num));