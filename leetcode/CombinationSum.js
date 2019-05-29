/*
Input: candidates = [2,3], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

var combinationSum = function (candidates, target) {
    if (target <= 0) {
        return [];
    }
    let result = [];
    let easyPart = candidates.filter(c => c === target);
    if (easyPart.length) {
        result.push([easyPart[0]]);
    }
    candidates = candidates.filter(c => c !== target);
    if (candidates.length === 1) {
        if (target % candidates[0] === 0) {
            let tmp = new Array(parseInt(target / candidates[0]));
            tmp.fill(candidates[0]);
            result.push(tmp);
        }
        return result;
    }

    for(let i=0;i<candidates.length;i++){
        let cur = candidates[i];
        if (target % cur === 0) {
            let tmp = new Array(parseInt(target / cur));
            tmp.fill(cur);
            result.push(tmp);
        }
        let newTarget = target - cur;
        let curArr = [cur];
        while (newTarget >= 0) {
            let subRes = combinationSum(candidates.filter((c,index)=>{return index!==i;}), newTarget);
            if (subRes && subRes.length) {
                subRes.forEach(d => {
                    result.push([...d, ...curArr]);
                })
            }
            newTarget -= cur;
            curArr.push(cur);
        }
    }

    let final = [];
    result.forEach(r=>{
        if(!final.length){
            final.push(r);
        } else{
            
            for(var f of final){
                if(compare(f, r)){
                    return false;
                }
            }
            final.push(r);
        }
    })

    return final;
};

var c = combinationSum([2, 3, 7], 7);

function compare(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    var a = arr1.sort();
    var b = arr2.sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

console.log(c);