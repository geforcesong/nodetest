require('babel-register')({
    presets: ['es2015'],
    only: [
        // File paths that **don't** match this regex are not compiled
        /es6\/models/
    ],
    cache: true
});

const add = require('./old');
const add10 = require('./es6/models/add10').default;
const multi = require('./es6/models/multi').default;

console.log(add(1, 2));
console.log(multi(4, 6));
console.log(add10(100));