// 惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数
// 只有第一次调用会执行这个时间代码
var foo = function() {
    var t = new Date();
    console.log(1);
    foo = function() {
        console.log(2);
        return t;
    };
    return foo();
};

console.log(foo());
console.log('****');
console.log(foo());