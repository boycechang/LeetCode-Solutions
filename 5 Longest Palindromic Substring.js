/** https://leetcode.com/problems/longest-palindromic-substring/#/description
 * @param {string} s
 * @return {string}
 */

 var scanPalindrome = function(s, anchorPos1, anchorPos2) {
     while (anchorPos1 - 1 >= 0 && anchorPos2 + 1 < s.length && s.charAt(anchorPos1 - 1) === s.charAt(anchorPos2 + 1)) {
         anchorPos1 = anchorPos1 - 1;
         anchorPos2 = anchorPos2 + 1;
     }
     return {"start":anchorPos1, "end":anchorPos2};
 }

 var longestPalindrome = function(s) {
     var longestStart = 0;
     var longestEnd = 0;

     for (var i = 0; i < s.length; i++) {
         var check = scanPalindrome(s, i, i);
         if (check["end"] - check["start"] > longestEnd - longestStart) {
             longestStart = check["start"];
             longestEnd = check["end"];
         }

         if (i < s.length - 1 && s.charAt(i) === s.charAt(i+1)) {
             check = scanPalindrome(s, i, i + 1);
             if (check["end"] - check["start"] > longestEnd - longestStart) {
                 longestStart = check["start"];
                 longestEnd = check["end"];
             }
         }
     }

     return s.substring(longestStart, longestEnd+1);
 };

console.log(longestPalindrome("babad"));
