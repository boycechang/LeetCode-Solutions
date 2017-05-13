/** https://leetcode.com/problems/palindrome-number/#/description
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
      if (x < 0) {
          return false;
      }

      var div = 1;
      while ( Math.floor(x / div) >= 10) {
          div *= 10;
      }

      while ( x !== 0) {
          if (Math.floor(x / div) !== x % 10) {
              return false;
          } else {
              x = Math.floor( (x % div) / 10 );
          }
          div = Math.floor(div / 100);
      }

      return true;
  };

console.log(isPalindrome(10301));
