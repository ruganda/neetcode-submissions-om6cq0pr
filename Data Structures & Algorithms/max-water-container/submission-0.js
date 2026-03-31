class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1
        let max = 0
        while(l<r){
            let area = (r-l) * Math.min(heights[l], heights[r])
            console.log('area>>', area)
            max = Math.max(max, area)

            if(heights[l]<heights[r]){
                l+=1
            }else{
                r-=1
            }
        }
        return max
    }
}
