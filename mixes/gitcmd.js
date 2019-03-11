const { exec } = require('child_process');
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
    await executeCommand('git ci -am "try process"');
    await executeCommand('git push')
})();