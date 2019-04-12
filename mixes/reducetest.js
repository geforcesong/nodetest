const arr = [1, 2, 3, 4, 5];

var ret = arr.reduce((prev, cur, index, tmparr) => {
    console.log(`prev:${prev} cur:${cur} index:${index}`);
    console.log(tmparr);
    return prev + cur;
}, 0);
console.log();
console.log('***********');
console.log();

console.log(`ret=${ret}`);