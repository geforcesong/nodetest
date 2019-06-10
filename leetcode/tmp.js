class TreeNode {
    constructor(left, right, val) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}

let root = new TreeNode(null, null, 1);
let right = root.right = new TreeNode(null, null, 2);

right.left = new TreeNode(null, null, 3);

var inorderTraversal = function (root) {
    let ret = [];
    if(root){
        let left = inorderTraversal(root.left);
        ret = ret.concat(left);
        ret.push(root.val);
        ret = ret.concat(inorderTraversal(root.right));
    }
    return ret;
};

console.log(inorderTraversal(root));
