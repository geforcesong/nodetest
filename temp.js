
const ds = {
    search: {
        header: {
            filter: 'price',
            new: 'new'
        }
    },
    dpp: {
        name: {
            status: 'pink $count, what $str are you doing?'
        }
    }
}

function getString(dataStore, key, options) {
    if (!key) {
        return '';
    }
    try {
        const sections = key.split('.');
        let val = dataStore[sections[0]];
        sections.shift();
        while (sections.length) {
            const section = sections.shift();
            val = val[section];
        }
        if (!val || typeof (val) != 'string') {
            return '';
        }
        if (val && options) {
            var re = new RegExp("$(" + Object.keys(options).join("|") + ")", "gi");
            // Object.keys(options).forEach(opt => {
            //     val = val.replace(`$${opt}`, options[opt]);
            // })
            console.log(re);
            val.replace(re, function (matched) {
                // return mapObj[matched.toLowerCase()];
                console.log(matched);
            });
        }
        return val;
    } catch (err) {
        return '';
    }
}

// console.log(getString(ds, 'search.header.filter'));
// console.log(getString(ds, 'search.header.new'));
// console.log(getString(ds, 'dpp.name.status', {count:100, str:'hell'}));

const str = 'pink $count, what $str0 are yo$1000u doing $100,200?';
const data = { count: 100, str0: 'hell' };
const ret = str.replace(/\$[a-zA-Z0-9]+/g, (matched) => {
    return data[matched.substr(1)] || matched;
});
console.log(str);
console.log(ret);