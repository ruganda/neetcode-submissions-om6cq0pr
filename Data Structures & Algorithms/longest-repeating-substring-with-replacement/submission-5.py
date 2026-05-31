# from Collections import Counter
def highest_in_hash( hash):
    high = 0
    key = ''
    for item, values in hash.items():
        if hash[item] > high:
            key = item
            high = hash[item]
    return high
class Solution:

    def characterReplacement(self, s: str, k: int) -> int:
        l, r = 0, 0
        n = len(s)
        
        hash = {}
        longest = 0
        while(r<=n):
            

            if r<n:
                hash[s[r]] = (hash.get(s[r], 0) + 1)
            r+=1
            window = s[l:r]


            high = highest_in_hash(hash)
            diff = len(window) - high 

            if diff <= k:
                longest = max(longest, len(window))
            else:
                
                hash[s[l]] = hash.get(s[l], 0) - 1
                if hash[s[l]]<1:
                    del hash[s[l]]
                l+=1
           
        return longest



