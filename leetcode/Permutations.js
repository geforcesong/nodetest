var permute = function (nums) {
    if (!nums || !nums.length) {
        return null;
    }
    if (nums.length === 1) {
        return [nums];
    }

    let ret = [];

    for (var i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let subGroups = permute(nums.filter((c, index) => { return index !== i; }));
        subGroups.forEach(c => {
            ret.push([cur, ...c]);
        })
    }
    return ret;
};

console.log(permute([1, 2, 3]));
