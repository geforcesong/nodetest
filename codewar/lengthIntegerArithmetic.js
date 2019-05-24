function add(augend, addend) {
    if (!augend) return (addend && addend.toString()) || '0';
    if (!addend) return (augend && augend.toString()) || '0';
    const augendArr = augend.toString().split('');
    const addendArr = addend.toString().split('');
    let carry = 0, i = augendArr.length - 1, j = addendArr.length - 1;
    let final = [];
    while (i >= 0 || j >= 0) {
        let ret = parseInt(augendArr[i--] || 0) + parseInt(addendArr[j--] || 0) + carry;
        final.unshift(ret % 10);
        carry = Math.floor(ret / 10);
    }
    if (carry) {
        while (carry) {
            final.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return final.join('');
}

function subtract(minuend, subtrahend) {
    if (!minuend) return '0';
    if (!subtrahend) return (minuend && minuend.toString()) || '0';
    const minuendArr = minuend.toString().split('');
    const subtrahendArr = subtrahend.toString().split('');
    let carry = 0, i = minuendArr.length - 1, j = subtrahendArr.length - 1;
    let final = [];
    while (i >= 0) {
        let a = parseInt(minuendArr[i--]) || 0;
        let b = parseInt(subtrahendArr[j--]) || 0;
        let cur = a + carry - b;
        if (cur < 0) {
            cur = cur + 10;
            carry = -1;
        } else {
            carry = 0;
        }
        final.unshift(cur);
    }
    final = final.slice(final.findIndex(n => n));
    return final.length ? final.join('') : '0';
}

function multiply(multiplicand, multiplier) {
    if (!multiplicand || !multiplier || multiplicand == '0' || multiplier === '0') {
        return '0';
    }
    const multiplicandArr = multiplicand.toString().split('');
    const multiplierArr = multiplier.toString().split('');
    let j = multiplierArr.length - 1;
    let final = '0', pos = 0;
    while (j >= 0) {
        let cur = [];
        let carry = 0,  multiplyN = parseInt(multiplierArr[j--]) || 0, i = multiplicandArr.length - 1;
        while (i >= 0) {
            let a = multiplyN;
            let b = parseInt(multiplicandArr[i--]) || 0;
            let result = a * b + carry;
            cur.unshift(result % 10);
            carry = Math.floor(result / 10);
        }
        if (carry) {
            while (carry) {
                cur.unshift(carry % 10);
                carry = Math.floor(carry / 10);
            }
        }
        for (let k = 0; k < pos; k++) {
            cur.push('0');
        }
        pos++;
        final = add(final, cur.join(''));
    }
    return final;
}

function divide(dividend, divisor) {
    if (!divisor || divisor == 0) {
        throw new Error('0 can\'t be divided');
    }
    if (!dividend || dividend == 0) {
        return '0';
    } else if (divisor == '1'){
        return dividend;
    } else if(dividend === divisor){
        return '1';
    }
    let tmp  = divisor, times = '1';
    while(lessThan(tmp, dividend)){
        times++;
        tmp = multiply(divisor, times);
    }
    if(tmp === dividend){
        times++;
    }
    return String(times-1);
}

function lessThan(a, b) {
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b[i]) {
                continue;
            } else if (a[i] > b[i]){
                return false;
            } else{
                return true;
            }
        }
        return false;
    } else {
        return a.length < b.length;
    }
}


console.log(add('12345678901234567890', '12345678901234567890') === '24691357802469135780');
console.log(subtract('24691357802469135780', '12345678901234567890') === '12345678901234567890');
console.log(multiply('12345678901234567890', '12345678901234567890') === '152415787532388367501905199875019052100');

console.log(divide('24691357802469135780','12345678901234567890') === '2');
