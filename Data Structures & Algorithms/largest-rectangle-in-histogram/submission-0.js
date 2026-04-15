class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack =[]// [index, height]
        let max = heights[0]
        for (let i in heights){
            console.log(i)
            let start = i
            while (stack.length && stack.at(-1)[1]> heights[i]){
                const [index, height] = stack.pop()
                max = Math.max(max, height* (i-index))
                start = index
            }
            stack.push([start, heights[i]]);
        }

        for (let i in stack){
            const [index, height] = stack[i]
            max = Math.max(max, height*(heights.length - index))
        }
        return max
    }
}
