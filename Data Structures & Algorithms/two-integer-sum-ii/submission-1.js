class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0; i<numbers.length; i++){
            let temp = target-numbers[i];
            if(numbers.includes(temp)){
                return [i+1, numbers.indexOf(temp) + 1]
            }
        }
    }
}
