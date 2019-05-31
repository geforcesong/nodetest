let data = [[1, 3], [2, 6], [8, 10], [15, 18]]

var merge = function (intervals) {
    const starts = intervals.map(c => c[0]).sort((a, b) => a - b);
    const ends = intervals.map(c => c[1]).sort((a, b) => a - b);
    console.log(starts);
    console.log(ends);
    var res = [];
    for (var i = 0, j = 0; i < intervals.length; ++i) {
        if (i == intervals.length - 1 || starts[i + 1] > ends[i]) {
            res.push([starts[j], ends[i]]);
            j = i + 1;
        }
    }
    return res;
};



// console.log(merge(data));


var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    return merge(intervals)
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));