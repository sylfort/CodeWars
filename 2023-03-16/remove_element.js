var removeElement = function(nums, val) {
    let L = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[L] = nums[i];
            L++;
        }
    }
    return L;
};

//nums = [3,2,2,3], val = 3