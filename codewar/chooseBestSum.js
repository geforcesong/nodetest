function subArrays(arr){
    if (arr.length === 1) return [arr];
    else {
        subarr = subArrays(arr.slice(1));

        var cmp = subarr.map(e => e.concat(arr[0]));

        return subarr.concat(cmp, [[arr[0]]]);
    }
  }
  
  // subArrays([1,2,3,4,5])
  
  // helper to find all subarrays of length N within an array of arrays
  function filterByLength(arr, n) {
    const result = arr.filter(a => a.length == n);
    return result;
  }
  
  function chooseBestSum(maxDist, towns, arr) {
      let subsets = filterByLength(subArrays(arr), towns); 
      console.log(subsets);
    //   let trip = []; 
    //   let myDist = 0; 
    //   console.log(subsets)
    //   for(var a of subsets){
    //     let sum = a.reduce((a,b)=>a+b);
    //     console.log(sum)
    //     if (sum <= maxDist && sum >= myDist) {
    //       myDist = sum; 
    //     }
    //   }
    // return myDist;  
  }

//   var ts = [50, 55, 56, 57, 58]
// chooseBestSum(163, 3, ts) // 163

console.log(subArrays([1,2]));

function mySubArray(arr){
    if(!arr || !arr.length){
        return null;
    }
    if(arr.length === 1){
        return [arr];
    }
    var subArr = mySubArray(arr.slice(1));
    console.log('***********');
    console.log(subArr);
    var cmp = subArr.map(c=>c.concat(arr[0]));
    console.log('&&&&&&&&');
    console.log(cmp);
    return subArr.concat(cmp, [[arr[0]]]);

}

console.log(mySubArray([3,4, 5]));