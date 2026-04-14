class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []
        const posTime = position.map((pos,i)=>{
            const time = (target-pos)/ speed[i]
           return [pos, time] 
        }).sort((a,b)=>{
            return a[0]-b[0]
        })
     
        console.log(posTime, '===---')

        for (let i = posTime.length-1; i>=0; i--){
            console.log(posTime[i], '---')
            stack.push(posTime[i][1])

            if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
                console.log('inside if')
                stack.pop()
            }
        }
        return stack.length

        
     
    }
}
