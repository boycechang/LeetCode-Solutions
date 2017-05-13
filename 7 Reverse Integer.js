/** https://leetcode.com/problems/reverse-integer/#/description
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     var result = 0;
     var minimum = -2147483648;
     var maxmum = 2147483647;

     while (x !== 0) {
         result = result * 10 + x % 10;
         x = parseInt( x / 10 );
     }

     if (result > maxmum || result < minimum) {
         return 0;
     }

     return result;
 };

console.log(reverse(-789));
