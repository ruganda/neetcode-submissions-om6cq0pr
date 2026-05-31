def hash_from_string(string):
    h = {}
    for s in string:
        h[s] = h.get(s, 0)+ 1
    return h

def check_dict_equality(a,b):
    print(a, b, 'a. b')
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

        
        while(r<=n):
            window_hash = hash_from_string(window)
            if check_dict_equality(window_hash, s1_hash):
                return True
            
            r+=1
            l+=1
            window = s2[l:r]
            
            
        return False
        
        