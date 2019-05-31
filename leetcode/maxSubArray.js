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

console.log(maxSubArray([-1, -10, -3, -4, -155, -20, -10, -5, -4]));