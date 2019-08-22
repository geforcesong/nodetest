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