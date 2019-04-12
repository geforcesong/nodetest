function highAndLow(numbers) {
    // ...
    let numarr = numbers.split(' ').map((v)=>{ return parseInt(v)});
    if (numarr.length === 1) {
        return `${numarr[0]} ${numarr[0]}`;
    }
    var min = numarr[0], max = numarr[1];
    if (min > max) {
        min = numarr[1];
        max = numarr[0];
    }

    for (var i = 2; i < numarr.length; i++) {
        if (min > numarr[i]) {
            min = numarr[i];
        }
        if (max < numarr[i]) {
            max = numarr[i]
        }
    }
    return `${max} ${min}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));


// var str = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';

// var t = function(c,d){
//     console.log(c);;
//     console.log(d);;
// }

// var arr = str.split(' ').map(Number);
// t(...arr)

// console.log(Math.min(...arr));