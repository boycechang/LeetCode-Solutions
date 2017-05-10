/**
 * @param {string} s
 * @return {number}5
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    var finalLength = 0;
    var currentStart = 0;
    var exist = {};

    var i = -1;
    while (++i < s.length) {
        var keys = Object.keys(exist);
        if (Object.keys(exist).length < 2 || exist[s.charAt(i)] !== undefined) {
            exist[s.charAt(i)] = i;
        } else {
            var values = Object.values(exist);
            var previousOne = (values[0] < values[1]) ? 0 : 1;
            currentStart = values[previousOne] + 1;
            delete exist[keys[previousOne]];
            exist[s.charAt(i)] = i;
        }

        finalLength = (i - currentStart + 1) > finalLength ? (i - currentStart + 1) : finalLength;
    }

    return finalLength;
};

console.log(lengthOfLongestSubstringTwoDistinct("eeeaaccccc"));
