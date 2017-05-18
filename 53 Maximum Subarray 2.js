/** https://leetcode.com/problems/maximum-subarray/#/description
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     if (nums === null || nums.length === 0) {
         return 0;
     }

     var endMax = nums[0];
     var max = nums[0];

     for (var i = 1; i < nums.length; i++) {
         endMax = Math.max(endMax + nums[i], nums[i]);
         max = Math.max(max, endMax);
     }

     return max;
 };
