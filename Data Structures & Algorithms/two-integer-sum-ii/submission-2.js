class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(numbers, target) {
    //     for(let i=0; i<numbers.length; i++){
    //         let temp = target-numbers[i];
    //         if(numbers.includes(temp)){
    //             return [i+1, numbers.indexOf(temp) + 1]
    //         }
    //     }
    // }

    // Two pointer
    twoSum(numbers, target){
        let l=0;
        let r = numbers.length-1
        while(l<r){
            let temp = numbers[l]+ numbers[r]
            if(temp<target){
                l+=1
            }else if(temp>target){
                r-=1
            }else{
                return[l+1, r+1]
            }
        }
        return []
    }

}
