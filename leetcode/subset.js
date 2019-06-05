var subsets = function (nums) {
    if (!nums) {
        return [];
    }
    if (nums.length === 1) {
        return [nums, []]
    }
    let res = [];
    let cur = nums[0];
    res.push([cur]);
    let subs = subsets(nums.slice(1));
    res = res.concat(subs);
    subs.map(c => {
        if(c && c.length){
            res.push([...c, cur]);
        }
    });
    return res;
};

console.log(subsets([1, 2, 3]));