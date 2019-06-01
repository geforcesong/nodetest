var count = 0;
var getPermutation = function(n, k) {
    let arr = [];
    count=0;
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    try{
        getCombination(arr, arr.length, k)[k-1].join('');
    } catch(ex){
        return ex.message
    }
};

var getCombination = function (arr, len, k) {
    if (!arr || !arr.length) {
        return [];
    }
    if (arr.length == 1) {
        return [arr];
    }
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        var subs = getCombination(arr.filter((c, index) => index != i));
        subs.forEach(e => {
            var a = [cur, ...e];
            res.push(a);
            if(a.length === len){
                count++
            }
            if(count === k){
                throw new Error(a.join(''))
            }
        })
    }
    return res;
}

console.log(getPermutation(4,9));