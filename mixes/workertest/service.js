const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
var m=10;
for(var i=0;i<50000;i++){
    m+=i;
}

parentPort.postMessage( 'hello:'+ workerData )
parentPort.postMessage({ hello: workerData })
parentPort.postMessage(100)
parentPort.postMessage('Total:' + m);
// throw new Error('not a num')