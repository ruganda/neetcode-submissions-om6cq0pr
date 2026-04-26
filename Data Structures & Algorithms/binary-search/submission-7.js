class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, first =0, last=nums.length-1) {
       
        let mid = Math.floor((first+last)/2)
        
        if(first > last){
            return -1
        }

        if (nums[mid] === target){
            return mid
        }else if(nums[mid]<target){
            
            return this.search(nums, target, mid+1, last)
        }else{
        
            return this.search(nums, target, first, mid-1)
        }
    
    }

    // search(nums, target) {
    //     let first = 0
    //     let last =  nums.length - 1
        

    //     while(first <= last){
    //         let mid = Math.floor((first+last)/2)
    //         if (nums[mid] === target){
    //             return mid
    //         }else if(nums[mid]<target){
    //             first = mid+1
    //         }else{
    //             last = mid -1
    //         }
    //     }
    //     return -1
    // }
}
