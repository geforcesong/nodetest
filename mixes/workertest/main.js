const { Worker } = require('worker_threads')
function runService(workerData) {

  return new Promise((resolve, reject) => {
    const worker = new Worker('./service.js', { workerData });
    worker.on('message', (data)=>{
      console.log('msg: ' + JSON.stringify(data));
      return resolve(data);
    });
    worker.on('error', reject);
    worker.on('exit', (code) => {
      console.log(`exit: ${code}`);
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

async function run() {
  const result = await runService('world')
  console.log('*******');
  console.log(result);
}

run().catch(err => console.error(err))