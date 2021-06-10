var count =1;
var container = document.getElementById('container');

function getUserAction(e){
    console.log(e);
    container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000, true);


function debounce(func, wait, immediate){
    var timeout;
    return function(){
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);
        if(immediate){
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else{
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        }
    }
}


//简易版防抖原理。 防抖debounce代码：
function debounce1(fn,delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function (e) {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}
// 处理函数
function handle() {
    console.log('防抖：', Math.random());
}
        
//滚动事件
window.addEventListener('scroll', debounce1(handle,500));