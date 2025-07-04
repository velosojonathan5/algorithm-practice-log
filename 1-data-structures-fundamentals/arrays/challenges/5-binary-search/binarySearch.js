function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);

        if(nums[mid] == target) return mid

        if(target > nums[mid])
            left = mid + 1
        
        if(target < nums[mid])
            right = mid -1
    }
    
    return -1
};


console.log(search([-1,0,3,5,9,12], -1))