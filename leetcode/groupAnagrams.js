var groupAnagrams = function(strs) {
    let keys = {};
    strs.forEach(element => {
        const key = element.split('').sort().join('');
        if(!keys[key]){
            keys[key] = [element];
        } else{
            keys[key].push(element);
        }
    });
    return Object.keys(keys).map(c=>keys[c]);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));