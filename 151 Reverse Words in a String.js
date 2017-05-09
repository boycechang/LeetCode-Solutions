/** https://leetcode.com/problems/reverse-words-in-a-string/#/description
 * @param {string} str
 * @returns {string}
 */

 var reverseWords = function(str) {
     var array = str.trim().split(" ")
     var filtered = array.filter( (element, pos) => {
         return (element !== "" || element.length !== 0);
     })
     return filtered.reverse().join(" ");
 };

console.log(reverseWords("   a   b "));
