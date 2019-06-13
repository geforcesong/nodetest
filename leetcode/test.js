var c = function (root, sum) {
    if (!root) {
        return false;
    }
    let nodes = [root];
    while (nodes.length) {
        let nodes1 = [];
        for(var n of nodes){
            if (n.left) {
                n.left.val += n.val;
                nodes1.push(n.left);
            }
            if (n.right) {
                n.right.val += n.val;
                nodes1.push(n.right);
            }
            if(!n.left && !n.right && n.val === sum){
                return true;
            }
        };
        nodes = nodes1;
    }
    return false;
}