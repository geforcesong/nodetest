const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
parentPort.postMessage( 'hello:'+ workerData )
parentPort.postMessage({ hello: workerData })
parentPort.postMessage(100)
// throw new Error('not a num')