const round = 200;
let greater50 = 0, less50 = 0;

for (let i = 0; i < round; i++) {
    const rnd = Math.floor(Math.random() * 100);
    if (rnd > 50) {
        greater50++;
    } else {
        less50++;
    }
}

console.log(`greater50 is ${greater50}, less50 is ${less50}`);