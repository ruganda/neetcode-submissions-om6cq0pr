class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     let max = 0;
    //     for(let i=0; i<s.length; i++){
    //         let visted = new Set();
    //         for(let j=i; j<s.length; j++){
    //             console.log(s[i], s[j], 'i & j', visted)
    //             if(!visted.has(s[j])){
    //                 visted.add(s[j])
    //             }else{
    //                 break;
    //             } 
    //         }
    //         max = Math.max(visted.size, max )
    //     }
    //     return max
    // }

    lengthOfLongestSubstring(s) {
        const visted ={}
        let window = []
        let max = 0;
        for(let i = 0; i<s.length; i++){
            if(!window.includes(s[i])){
                window.push(s[i])
            }else{
                let j = 0
                const dupIndex = window.indexOf(s[i])
                window = window.slice(dupIndex+1)
                window.push(s[i])

                console.log( window)
            }
            console.log( window, 'window', )
            max = Math.max(window.length, max)

        }
        return max
    }
}
