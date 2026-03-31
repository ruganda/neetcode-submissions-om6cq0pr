class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pdct =(arr)=>{
           let res =1 
            for(let val of arr){
                res*=val
            }
            return res
        }
        return nums.map((num, i)=>{
            let prefix = pdct(nums.slice(0,i))
            let postFix = pdct(nums.slice(i+1, nums.legth))

            console.log(nums.slice(0,i),  nums.slice(i+1, nums.legth))
            return prefix * postFix
        });
    }
}
