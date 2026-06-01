class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        l =0
        r = k
        n = len(nums)
        window = nums[l:r]
        max_arr = []

        while r<=n:

            max_val = max(window)
            max_arr.append(max_val)
            r+=1
            l+=1
            window = nums[l:r]

        return max_arr