var permuteUnique = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    if (nums.length === 1) {
        return [nums];
    }

    let ret = [];
    let records = new Set();
    for (var i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if(records.has(cur)){
            continue;
        }
        records.add(cur);
        let subGroups = permuteUnique(nums.filter((c, index) => { return index !== i; }));
        subGroups.forEach(c => {
            ret.push([cur, ...c]);
        })
    }
    return ret;
};

console.log(permuteUnique([1,1,2]));