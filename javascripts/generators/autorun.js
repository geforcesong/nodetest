function asyncTask(v, time) {
    return new Promise(resolve => {
        setTimeout(function () {
            return resolve(10 * v);
        }, time)
    });
}

function * gen() {
    var result = yield asyncTask(1, 1000);
    var result1 = yield asyncTask(2, 1000);
    var result2 = yield asyncTask(3, 1000);
    console.log(result, result1, result2);
}

// let g = gen();
// let result = g.next();

// result.value.then((v)=>{
//     console.log(`v=${v}`);
//     return g.next(v+1).value;
// }).then(v1=>{
//     console.log(`v1=${v1}`);
//     return g.next(v1+1).value
// }).then(v2=>{
//     console.log(`v2=${v2}`);
//     return g.next(v2+1).value
// })

function run(gen){
    var g=gen();

    function next(data){
        var result = g.next(data);
        if(result.done){
            return;
        }

        result.value.then((data)=>{
            console.log(data);
            return next(data);
        })
    }

    next();
}

run(gen);