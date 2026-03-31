class Solution:
    def maxArea(self, heights: List[int]) -> int:
        max_a = 0
        for i in range(len(heights)-1):
            for j in range(i+1, len(heights)):
                print(i, j, '---', heights[i], heights[j])
                height = (min(heights[i], heights[j]))
                length = j-i
                area = height * length
                max_a = max(max_a, area)

        return max_a

        