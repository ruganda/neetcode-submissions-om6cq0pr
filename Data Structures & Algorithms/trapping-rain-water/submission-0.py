class Solution:
    def trap(self, height: List[int]) -> int:
            left = 0
            right = len(height)-1
            maxLeft = height[0]
            maxRight = height[len(height)-1]
            vol = 0
            while(left< right):
                if(height[left]<= height[right]):
                    maxLeft = max(maxLeft, height[left])
                    temp = maxLeft - height[left]
                    if(temp >=1 ):
                        vol += temp
                    left+=1
                else:
                    maxRight = max(maxRight, height[right])
                    temp = maxRight - height[right]
                    if(temp > 0):
                        vol+=temp
                    right -= 1
            return vol
            
        