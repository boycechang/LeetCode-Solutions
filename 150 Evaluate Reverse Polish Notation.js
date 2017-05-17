/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
     if (tokens === null || tokens.length === 0) {
         return 0;
     }

     var stack = [];
     var current = 0;

     var num1;
     var num2;
     while (current < tokens.length) {
         var token = tokens[current];
         if (token === '+') {
             num1 = stack.pop();
             num2 = stack.pop();
             stack.push(num2 + num1);
         } else if (token === '-') {
             num1 = stack.pop();
             num2 = stack.pop()
             stack.push(num2 - num1);
         } else if (token === '*') {
             num1 = stack.pop();
             num2 = stack.pop()
             stack.push(num2 * num1);
         } else if (token === '/') {
             num1 = stack.pop();
             num2 = stack.pop()
             stack.push(parseInt(num2 / num1));
         } else {
             stack.push(parseInt(token))
         }

         current++;
     }

     return stack.pop();
 };
