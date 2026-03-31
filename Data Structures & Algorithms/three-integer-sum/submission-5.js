class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res =[]
        const sortedNums = nums.sort((a,b)=>a-b)
        
        console.log(Array.isArray(nums), '---', sortedNums)
        for (let i =0; i<sortedNums.length-2; i++){
            if(sortedNums[i] ===sortedNums[i-1]){
                continue
            }

            let l = i+1 
            let r = sortedNums.length-1
          
            while(l<r){
                let temp = sortedNums[i] + sortedNums[l] + sortedNums[r]
                
                if(temp ===0){
                    const tempArray = [sortedNums[i],sortedNums[l],sortedNums[r]]
                    console.log(tempArray, '==temp')
                    res.push(tempArray)
                    if(sortedNums[l]===sortedNums[l+1]) l++
                    if(sortedNums[r] ===sortedNums[r-1]) r--
                    // while (l < r && sortedNums[l] === sortedNums[l + 1]) l++;
                    // while (l < r && sortedNums[r] === sortedNums[r - 1]) r--;
                    l++
                    r--
                }else if(temp < 0){
                    l++
                }else{
                    r--
                }
            }
            
        }
        return res
    }
}
