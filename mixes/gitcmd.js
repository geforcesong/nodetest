const { exec } = require('child_process');

// exec('git add .', (err, stdout, stderr) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     // the *entire* stdout and stderr (buffered)
//     console.log('Command is executed without error');
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// });

async function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                return reject(err);
            }
            // the *entire* stdout and stderr (buffered)
            console.log('Command is executed without error');
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            return resolve(true);
        });
    })
}

(async _=>{
    await executeCommand('git add .');
    await executeCommand('git ci -am "hello"');
    await executeCommand('git push')
})();