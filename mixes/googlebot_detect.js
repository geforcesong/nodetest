const dns = require('dns');

function detectGoogleBot(ip) {

    return new Promise(function (resolve, reject) {
        dns.reverse(ip, (error, hosts) => {
            if (error) {
                return resolve(false);
            }

            const tld = hosts[0] && hosts[0].split('.').slice(-2, -1)[0];
            if (tld !== "google" && tld !== "googlebot") {
                return resolve(false);
            }

            dns.lookup(hosts[0], (error, address) => {
                if (error) {
                    return resolve(false);
                }
                const match = address === ip;
                return resolve(match);
            });
        });
    });
}

(async _ => {
    var start = new Date();
    let ip = '166.149.66.1';
    let c = await detectGoogleBot(ip);
    console.log(`${ip} ---> ${c}, cost ${(new Date()) - start} ms.`);

    start = new Date();
    ip = '66.249.66.1';
    c = await detectGoogleBot(ip);
    console.log(`${ip} ---> ${c}, cost ${(new Date()) - start} ms.`);

    start = new Date();
    ip = '66.249.90.77';
    c = await detectGoogleBot(ip);
    console.log(`${ip} ---> ${c}, cost ${(new Date()) - start} ms.`);
})()
