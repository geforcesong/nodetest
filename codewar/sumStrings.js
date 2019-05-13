
function sumStrings(a, b) {
    if (!a) return b;
    if (!b) return a;
    const len = Math.max(a.length, b.length);
    let index = 0;
    let more = 0;
    let result = [];
    while (index < len) {
        let m = a[a.length - 1 - index];
        let n = b[b.length - 1 - index];
        let sum = parseInt(m || 0) + parseInt(n || 0) + more;
        result.unshift(sum % 10);
        more = Math.floor(sum / 10);
        index++;
    }
    if (more) {
        result.unshift(more);
    }
    return result.slice(result.findIndex(c=>c!==0), result.length).join('');
}

console.log(sumStrings('00103', '08567'));