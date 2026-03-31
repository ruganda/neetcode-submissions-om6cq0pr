class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }
        

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop()
        return val
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length ===0) return 
        let min = this.stack[0]
        for (let el of this.stack){
            min = Math.min(min, el)
        }
        return min
    }
}
