require('babel-register')({
    presets: ['es2015'],
    only: [
        // File paths that **don't** match this regex are not compiled
        /es6\/models\/newf\.js/
    ],
    cache: true
});

const add = require('./old');
const multi = require('./es6/models/newf').default;

console.log(add(1, 2));
console.log(multi(4, 6));