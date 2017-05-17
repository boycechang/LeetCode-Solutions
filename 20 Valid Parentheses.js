/** https://leetcode.com/problems/valid-parentheses/#/description
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
     if (s === null || s.length === null) {
         return true;
     }

     var stack = [];
     var p = 0;
     var pop;
     while (p < s.length) {
         var char = s[p];
         if (char === ')') {
             pop = stack.pop();
             if (pop !== '(') {
                 return false;
             }
         } else if (char === '}') {
             pop = stack.pop();
             if (pop !== '{') {
                 return false;
             }
         } else if (char === ']') {
             pop = stack.pop();
             if (pop !== '[') {
                 return false;
             }
         } else {
             stack.push(char);
         }

         p++;
     }

     return stack.length === 0;
 };
