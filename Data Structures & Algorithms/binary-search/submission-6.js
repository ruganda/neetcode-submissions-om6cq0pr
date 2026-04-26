class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // search(nums, target) {
    //     let first = 0
    //     let last = nums.length -1
    //     let mid = Math.floor(nums.length/2)
        
    //     const hasSet = new Set(nums)
    //     if(!hasSet.has(target)){
    //         return -1
    //     }

    //     if (nums[mid] === target){
    //         return mid
    //     }else if(nums[mid]<target){
    //         first = mid + 1
    //         this.search(nums.slice(first, last), target)
    //     }else{
    //         last = mid -1
    //         this.search(nums.slice(first, last), target)
    //     }
    //     return mid
    // }

    search(nums, target) {
        let first = 0
        let last =  nums.length - 1
        

        while(first <= last){
            let mid = Math.floor((first+last)/2)
            if (nums[mid] === target){
                return mid
            }else if(nums[mid]<target){
                first = mid+1
            }else{
                last = mid -1
            }
        }
        return -1
    }
}
