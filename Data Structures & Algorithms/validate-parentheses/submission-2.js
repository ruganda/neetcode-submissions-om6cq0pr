class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hash = {
             ")": "(",
            '}': '{',
            ']': '['
        }
        const stack = []
        for(let l=0; l< s.length; l++){
          if (hash[s[l]] && hash[s[l]]===stack[stack.length-1]){
                stack.pop()
            }else{
                stack.push(s[l])
            }
        }
        return !stack.length
    }
}
