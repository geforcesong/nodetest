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

function subArrays(arr) {
  if (arr.length === 1) return [arr];
  else {
      subarr = subArrays(arr.slice(1));
      var cmp = subarr.map(e => e.concat(arr[0]));
      return subarr.concat(cmp, [[arr[0]]]);
  }
}

var combinationSum = function (candidates, target) {
    let k = subArrays(candidates).filter(c=>c.reduce((a,b)=>a+b) === target);
    return removeDuplicate(k);
};

var c = combinationSum([2,5,2,1,2], 5);

function removeDuplicate(arr) {
  if (!arr || !arr.length || arr.length === 1) {
    return arr;
  }
  arr.map(c => { c = c.sort(); });
  let final = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    let flag = true;
    final.forEach(f => {
      if (compare(f, arr[i])) {
        flag = false;
      }
    })
    if (flag) {
      final.push(arr[i]);
    }
  }
  return final;
}

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