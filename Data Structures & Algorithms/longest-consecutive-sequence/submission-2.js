class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0
        const numsSet = new Set(nums)
        let longest = 0
        for(let num of nums){
            if(!numsSet.has(num-1)){
                let length = 0
                while(numsSet.has(num + length)){
                    length ++
                }
                longest = Math.max(longest, length)
            }
            
        }
        return longest

    }
}
