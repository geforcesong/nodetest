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
    let c = await detectGoogleBot('66.149.66.1');
    console.log(`66.149.66.1 ---> ${c}`);
    c = await detectGoogleBot('66.249.66.1');
    console.log(`66.249.66.1 ---> ${c}`);
})()