class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    //Brute force
    maxProfit(prices) {
        let profit = 0
        for(let i=0; i<prices.length; i++){
            let temp = 0
            for(let j = i+1; j<prices.length; j++){
                temp = Math.max(temp, prices[j] - prices[i])
            }
            profit = Math.max(profit, temp)
        }
        return profit
    }

    // two pointer
    // maxProfit(prices) {
    //     let l =0, r = 1
    //     let profit = 0
    //     while(r<prices.length){
    //         let temp = prices[r] - prices[l]
    //         profit = Math.max(profit, temp)
    //         if(prices[r]<prices[l]){
    //             l = r
    //         }
    //         r++
    //     }
    //     return profit

    // }
}
