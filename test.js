
let countG1 = 0, countG2 = 0;

async function test(){
    for (let i = 0; i < 31836; i++) {
        const rnd = await Gen();
        if (rnd < 50) {
            countG1++
        } else if (rnd >= 50 && rnd < 100) {
            countG2++;
        } else {
            throw new Error('What happened here:' + rnd);
        }
        console.log(`countG1:${countG1}, countG2:${countG2}, ratio:${countG1 / countG2}`);
    }
}

async function Gen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const rnd = Math.floor(Math.random() * 100);
            resolve(rnd);
        }, 5);
    });
}

(async _=>{
    await test();
})();