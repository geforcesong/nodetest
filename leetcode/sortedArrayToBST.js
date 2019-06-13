class TreeNode{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length-1)
};

function helper(nums, low, high){
    if(low>high){
        return null;
    }
    
    let mid = low + Math.floor((high-low)/2);
    let head = new TreeNode(nums[mid]);
    head.left = helper(nums, low, mid-1);
    head.right = helper(nums, mid+1, high);
    return head;
}

let k = sortedArrayToBST([-10,-3,0,5,9]);

console.log(k);