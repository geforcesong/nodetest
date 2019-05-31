var canJump = function(nums) {
    let reach = 0;
    for(var i=0;i<nums.length;i++){
        if(i>reach || reach >nums.length-1) break;
        reach = Math.max(reach, i + nums[i]);
    }
    return reach >= nums.length-1;
};

// var arr =[2,3,1,1,4];
var arr =[3,2,1,0,4];

console.log(canJump(arr));