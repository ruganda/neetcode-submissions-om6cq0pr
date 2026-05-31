def hash_from_string(string):
    h = {}
    for s in string:
        h[s] = h.get(s, 0)+ 1
    return h

def check_dict_equality(a,b):
    for key in a:
        if a[key] != b.get(key, None):
            return False
    return True

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        l = 0
        r = len(s1)
        window = s2[l:r]
        n = len(s2)
        s1_hash = hash_from_string(s1)
        win_hash = {}
        for val in window:
            win_hash[val] = win_hash.get(val, 0) + 1
        
        while(r<=n):
            if check_dict_equality(win_hash, s1_hash):
                return True
            if r<n:
                win_hash[s2[r]] = win_hash.get(s2[r], 0) + 1

            win_hash[s2[l]] = win_hash.get(s2[l], 0) - 1
            if win_hash[s2[l]] < 1:
                del win_hash[s2[l]]


            r+=1
            l+=1
            window = s2[l:r]
   
        return False
        
        