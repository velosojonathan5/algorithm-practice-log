function findPeakElement(nums) {
    if(nums.length == 1) {
        return 0;
    }

    if(nums[0] > nums[1]) {
        return 0;
    }

    if(nums[nums.length -1] > nums[nums.length -2]) {
        return nums.length -1;
    }

    let left = 1;
    let right = nums.length -1;

    while(left <= right) {
        const mid = Math.ceil((left + right) / 2);

        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        }

        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

console.log("test 1:", findPeakElement([1,2,3,1]) === 2);
console.log("test 2:", findPeakElement([1,2,1,3,5,6,4]) === 5);
console.log("test 2:", findPeakElement([2,1]) === 0);