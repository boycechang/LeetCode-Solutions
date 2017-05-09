/**
 * @param {string} str
 * @return {number}
 */

 function fact(n) {
     var num = 1;
     while (n > 0) {
         num = num * 0.1;
         n--;
     }
     return num;
 }

 String.prototype.trim = function(){
     return this.replace(/(^\s*)|(\s*$)/g, "");
 }

 var myAtoi = function(str) {
     if (str === null || str.length === 0) {
         return 0;
     }

     var trimed = str.trim();

     var negtiveFactor = 1;
     var dotPosition = -1;
     var result = 0;
     var start = 0;
     var max = 2147483647;   //  2^31 - 1
     var min = -2147483648; //  - 2^32

     if (trimed.charAt(0) === '-') {
         negtiveFactor = -1;
         start = 1;
     } else if (trimed.charAt(0) === '+') {
         negtiveFactor = 1;
         start = 1;
     }

     for (var i = start; i < trimed.length; i++) {
         if (trimed.charAt(i) == '.') {
             if (dotPosition !== -1) {
                 return 0;
             } else {
                 dotPosition = i;
                 continue;
             }
         }

         if (!(trimed.charAt(i) <= '9' && trimed.charAt(i) >= '0')) {
             break;
         }

         if (dotPosition !== -1) {
             result = result + (trimed.charAt(i) - 0) * fact(i - dotPosition);
         } else {
             result = result * 10 + (trimed.charAt(i) - 0);
         }
     }

     var final = result * negtiveFactor;
     if (final < min) {
         return min;
     } else if (final > max) {
         return max;
     } else {
         return final;
     }
 };
