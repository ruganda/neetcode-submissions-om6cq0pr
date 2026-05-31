def hash_from_string(string):
    h = {}
    for s in string:
        h[s] = h.get(s, 0)+ 1
    return h

def check_dict_membership(a,b):
    for key in a:
        if a[key] > b.get(key, 0):
            return False
    return True

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ''
        l = 0
        r = len(t)
        t_dict = {}
        window = s[l:r]
        window_dict = {}
        n = len(s)
        minimum = None
        for i in range(len(t)):
            t_dict[t[i]] = t_dict.get(t[i], 0) + 1
            window_dict[window[i]] = window_dict.get(window[i], 0) + 1

        
        while(r<=n):

            if window == t:
                return window

            if r<n:
                window_dict[s[r]] = window_dict.get(s[r], 0) + 1 
            
            r+=1
                
            while( check_dict_membership(t_dict, window_dict) ):
                window = s[l:r]
                if minimum is None or (len(minimum) > len(window)):
                    minimum = window
                window_dict[s[l]] = window_dict.get(s[l], 0) - 1
                if window_dict[s[l]] < 1:
                    del window_dict[s[l]]
                l+=1


        return minimum if minimum is not None else ""
