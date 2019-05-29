/*
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

var combinationSum = function (candidates, target) {
    let ret =[];
    if(!target || target<0 || !candidates || !candidates.length){
        return [];
    }
    if(candidates.length === 1 && candidates[0] === target){
        ret.push(candidates);
        return ret;
    }
    
    var cur = candidates[0];
    let subg = combinationSum(candidates.slice(1), target-cur);
    if(subg && subg.length){
        subg.forEach(g=>{
            g.unshift(cur);
            ret.push(g);
        })
    }
    return ret;
};

var c = combinationSum([2,3, 1, 3, 4], 5);

console.log(c);