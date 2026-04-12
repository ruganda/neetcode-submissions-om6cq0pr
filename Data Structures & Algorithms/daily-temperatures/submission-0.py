class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        

        res = [0] * len(temperatures)
        stack = [] # pair [temp, index]
        for i, temp in enumerate(temperatures):
            print(bool(stack))
            while stack and temp > stack[-1][0]:
              stack_temp, stack_index =  stack.pop()
              res[stack_index] = (i-stack_index)
            stack.append([temp, i])
        return res
 
        # brute force
        # res =[]
        # i = 0
        # while i < len(temperatures):
        #     j = i
        #     while j < len(temperatures):
        #         if temperatures[j]>temperatures[i]:
        #             res.append(j-i)
        #             i+=1
        #         else:
        #             j+=1
        #     res.append(0)
        #     i+=1
        # return res

