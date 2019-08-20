const heapdump = require('heapdump');

async function takeSnapShot(name) {
    return new Promise((resolve, reject) => {
        let filename = `./${name}-${Date.now()}.heapsnapshot`;
        heapdump.writeSnapshot(filename, (err, filename) => {
            return resolve(true)
        });
    });
}

(async _=>{
    await takeSnapShot('hi-start');
    what=Buffer.alloc(300000000, 1);
    await takeSnapShot('hi-end');
})()