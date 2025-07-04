function binarySearch(nums, left, right, target) {
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        
        if(nums[mid] == target) return mid

        if(target > nums[mid]) left = mid + 1;

        if(target < nums[mid]) right = mid - 1;
    }

    return -1;
}


function search(nums, target) {
    let left = 0;
    let right = nums.length -1;
    let greatestIndex = -1;

    // when is not rotated
    if(nums[left] < nums[right]) {
        return binarySearch(nums, left, right, target);
    }

    while (greatestIndex == -1) {
        let mid = Math.ceil((left + right) / 2);
        
        
        if(mid == left || mid == right) greatestIndex = left;

        if(nums[mid] > nums[right]) left = mid;

        if(nums[left] > nums[mid]) right = mid; 
    }

    if (target == nums[greatestIndex]) return greatestIndex;
    
    if (target < nums[greatestIndex] && target >= nums[0]) {
        return binarySearch(nums, 0, greatestIndex, target);
    }

    return binarySearch(nums, greatestIndex + 1, nums.length - 1, target);
};

console.log("result: ", search([4,5,6,7,0,1,2], 0));
