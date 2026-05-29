class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        r = 0
        n= len(prices)
        profit = 0
        while(r<n):
            diff = prices[r] - prices[l]
            if diff< 0:
                l+=1
                r=l
            print(diff, 'diff', prices[r])
            profit = max(diff, profit)

            r+=1

        return profit
