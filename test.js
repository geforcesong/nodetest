
let Q = [];

function asyncCall(name){
    let task = new Promise((resolve, reject)=>{
        Q.push({resolve: resolve.bind(this), reject:reject.bind(this)});
    });
    task.then(()=>{
        console.log(`Task ${name} is done`);
    }).catch(()=>{
        console.log(`Task ${name} is canceled.`);
    });
    return task;
}

asyncCall('task1');
asyncCall('task2');

setTimeout(()=>{
    console.log('Now start tasks');
    while(Q.length){
        let c = Q.pop();
        if(Q.length %2==0){
            c['resolve']();
        } else{
            c['reject']();
        }
    }
}, 5000)