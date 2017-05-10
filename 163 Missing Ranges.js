/** https://leetcode.com/problems/missing-ranges/#/description
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

 var findMissingRanges = function(nums, lower, upper) {
    nums.splice(0, 0, lower - 1);
    nums.splice(nums.length, 0, upper + 1);

    var result = [];
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i+1] - nums[i] == 2) {
            result.push((nums[i] + 1) + "");
        } else if (nums[i+1] - nums[i] > 2) {
            result.push((nums[i] + 1) + "->" + (nums[i+1] - 1));
        }
    }
    return result;
};
