def removeElement(self, nums: List[int], val: int) -> int:
    i = 0
    j = len(nums) - 1
    k = 0

    while i < j:
        if nums[i] == val and nums[j] != val:
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp

        if nums[i] != val:
            i = i + 1
        
        if nums[j] == val:
            j = j - 1

    while nums[k] != val and k < len(nums):
        k = k + 1

    return k


