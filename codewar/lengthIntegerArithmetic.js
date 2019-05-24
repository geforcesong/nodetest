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
    const final = [];
    while (i >= 0) {
        let a = parseInt(minuendArr[i--]) || 0;
        let b = parseInt(subtrahendArr[j--]) || 0;
        let cur = a + carry - b;
        if(cur < 0){
            cur = cur + 10;
            carry = -1;
        } else{
            carry = 0;
        }
        final.unshift(cur);
    }
    return final.join('');
}

console.log(add('12345678901234567890', '12345678901234567890') === '24691357802469135780');
console.log(subtract('24691357802469135780', '12345678901234567890') === '12345678901234567890');