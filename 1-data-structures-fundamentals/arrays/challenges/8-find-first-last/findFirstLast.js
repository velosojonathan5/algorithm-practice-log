function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let start = -1;
    let end = -1;

    while((left <= right) && (start == -1 || end == -1)) {
        
        if(nums[left] == target) start = left;
        if(nums[right] == target) end = right;

        let mid = Math.ceil((left + right) / 2);

        if(target == nums[mid]) {
            if(start == -1) left += 1;

            if(end == -1) right -= 1;
        }

        if(target < nums[mid]) right = mid - 1;

        if(target > nums[mid]) left = mid + 1;
    }

    return [start, end]
};

console.log(searchRange([5,7,7,8,8,10], 8));