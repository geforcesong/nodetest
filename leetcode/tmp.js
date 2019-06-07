var merge = function(nums1, m, nums2, n) {
    nums2.forEach(c=>{
        let i = 0;
        while(nums1[i]<c) i++;
        if(i>=m){
            nums1[m] = c;
            m ++;
        } else{
            for(var j=m;j>i;j--){
                nums1[j] = nums1[j-1];
            }
            nums1[j] = c;
            m++;
        }
        console.log(nums1);
    })
    return nums1;
};

console.log(merge([1,2,3,0,0,0]
    ,3
    ,[2,5,6]
    ,3
    ));