function factorial(n) {
    let ret = [1];
    for (i = 1; i <= n; i++) {
        let carry =0;
        for (var j = ret.length - 1; j >= 0; j--) {
            var num = i * ret[j] + carry;
            ret[j] = num % 10 ;
            carry = Math.floor(num / 10);
        }
        if(carry){
            while(carry){
                ret.unshift(carry % 10);
                carry = Math.floor(carry/10)
            }
        }
    }
    return ret.join('');
}

console.log(factorial(124));