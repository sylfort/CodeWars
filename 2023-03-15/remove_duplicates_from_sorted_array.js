var removeDuplicates = function(nums) {

    let L = 1;
    for(let R=1;R<nums.length;R++){
        console.log(nums[R], nums[R-1])
        if(nums[R] !== nums[R - 1]){
           nums[L] = nums [R];
           L = L +1; 
        }
        console.log(nums[L], nums[R], L, R)
    
}
return L;
}