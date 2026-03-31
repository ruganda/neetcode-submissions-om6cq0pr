class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stimedS = s.replace(/[^a-zA-Z0-9]/g, '')
        let i= 0;
        let j = stimedS.length-1
        if (stimedS.length ===1) return true
        while (i<j){
            if(stimedS[i].toLowerCase() !== stimedS[j].toLowerCase()){
                return false
            }
           i+=1
           j-=1
        }
        
        return true;
    }
}
