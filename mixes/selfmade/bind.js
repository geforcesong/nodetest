var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

Function.prototype.bind2 = function (context) {
    
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    return function A () {
        console.log(this instanceof A);
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}

var c = bar.bind2(foo);
c()