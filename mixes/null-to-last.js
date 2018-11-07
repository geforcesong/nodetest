var list = [
    { name: 'a1', dom: 10 },
    { name: 'a1', dom: 3 },
    { name: 'a1', dom: 1 },
    { name: 'a1', dom: '-' },
    { name: 'a1', dom: null }
]

console.log(list);

list = list.sort((a, b) => {
    let aD = a.dom;
    let bD = b.dom;
    if (aD === null || isNaN(aD)) {
        return 1;
    }
    else if (bD === null || isNaN(bD)) {
        return -1;
    }
    return aD - bD;
});

console.log(list);
