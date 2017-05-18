/** https://leetcode.com/problems/maximum-product-subarray/#/description
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
     if (nums === null || nums.length === 0) {
         return 0;
     }

     var minEnd = nums[0];
     var maxEnd = nums[0];
     var max = nums[0];

     for (var i = 1; i < nums.length; i++) {
         var minTemp1 = minEnd * nums[i];
         var maxTemp1 = maxEnd * nums[i];

         var minTemp2 = Math.min(minTemp1, maxTemp1);
         var maxTemp2 = Math.max(minTemp1, maxTemp1);

         minEnd = Math.min(minTemp2, nums[i]);
         maxEnd = Math.max(maxTemp2, nums[i]);

         max = Math.max(max, maxEnd);
     }

     return max;
 };
