/** https://leetcode.com/problems/plus-one/#/description
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var pos = digits.length - 1;

    while (pos >= 0 && digits[pos] == 9) {
        digits[pos] = 0;
        pos--;
    }

    if (pos === -1) {
        digits.splice(0, 0, 1);
    } else {
        digits[pos] = digits[pos] + 1;
    }

    return digits;
};

console.log(plusOne([1, 9, 9]));
