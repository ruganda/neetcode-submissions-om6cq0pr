class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closing = {
            '}': '{',
            ']' : '[',
            ')' : '('
        }
        opening = ["(", '[', '{']
        if s[0] not in opening:
            return False

        for i in range(len(s)):
            
            if s[i] in opening:
                stack.append(s[i])
            else:
                print(stack, closing.get(s[i]), len(stack))
                if len(stack) and  stack[len(stack)-1] == closing.get(s[i]) :
                    print(stack, 'before pop')
                    stack.pop()
                else:
                    return False
                
        return not len(stack)
