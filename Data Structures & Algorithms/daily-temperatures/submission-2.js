class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [] // [temp, i]
        let res = Array(temperatures.length).fill(0)
        for (let i =0; i < temperatures.length; i++){
            while(stack.length && temperatures[i] > stack.at(-1)[0]){
                const [temp, index] = stack.pop()
                res[index] = (i-index)
            }
            stack.push([temperatures[i], i])
        }
        return res
    }
}
