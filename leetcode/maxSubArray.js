var maxSubArray = function (nums) {
    var max;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (max == undefined || sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));