var subsets = function (nums) {
    var subs = [[]];
    for(var n of nums){
        let sub_length = subs.length;
        for(var i=0;i<sub_length;i++){
            subs.push([...subs[i], [n]]);
        }
    }
    return subs;
};

console.log(subsets([1]));