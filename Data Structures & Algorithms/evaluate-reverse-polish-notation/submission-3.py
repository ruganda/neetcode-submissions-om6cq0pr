class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack =[]
        signs = ["+", '-', "*", "/"]
        for token in tokens:
            if  token not in signs:
                stack.append(int(token))
            else:
                val2  =  int(stack.pop())
                val1 = int(stack.pop())
                res = eval("{}{}{}".format(val1, token, val2))
                stack.append(res)
        return int(stack[0])
        