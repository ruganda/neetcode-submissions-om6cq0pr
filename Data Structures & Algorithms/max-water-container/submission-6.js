class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length -1
        let area = 0
        while (i<j){
            const tempArea = (j-i) * (Math.min(heights[i], heights[j]))
            area = Math.max(tempArea, area)
            if(heights[i]< heights[j]){
                i++
            }else{
                j--
            }

        }
        return area
            


    }
}
