class MyP {
    constructor(executor) {
        const resolve = res => {
            console.log('real inner resolve: ' + res);
            this.value = res;
            this.onFulfilled(res);
        }
        executor(resolve);
    }

    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
    }
}

var c = new MyP(resolve1 => {
    setTimeout(() => resolve1('Hello'), 5000);
})

c.then(v=>{
    console.log(`result:${v}`);
})