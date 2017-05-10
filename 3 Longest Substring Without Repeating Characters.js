/** https://leetcode.com/problems/longest-substring-without-repeating-characters/#/description
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var i = -1;
    var finalLength = 0;
    var appear = {};
    var currentStart = 0;
    while (++i < s.length) {
        if (appear[s.charAt(i)] !== undefined) {
            currentStart = appear[s.charAt(i)] + 1 > currentStart ? appear[s.charAt(i)] + 1 : currentStart;
        }
        appear[s.charAt(i)] = i;
        var cuttentLength = i - currentStart + 1;
        finalLength = cuttentLength < finalLength ? finalLength : cuttentLength;
    }

    return finalLength;
};

console.log(lengthOfLongestSubstring("abba"));
