
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    if(nums[left] < nums[right] || nums.length === 1 ) {
        return nums[left];
    }

    while(right >= left) {
        const mid = left + Math.floor((right - left) / 2);

        if(nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        if(nums[mid] > nums[right]) {
            left = mid;
        } else {
            right = mid;
        }
    }
};