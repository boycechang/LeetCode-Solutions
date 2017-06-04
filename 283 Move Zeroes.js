/** https://leetcode.com/problems/move-zeroes/#/description
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var moveZeroes = function(nums) {
     if (nums === null || nums.length === 0) {
         return;
     }

     var zeroP = seekZero(nums, 0);
     for (var i = 0; i < nums.length; i++) {
         if (i >= zeroP) {
             var nZeroP = seekNonZero(nums, i);
             if (nZeroP < nums.length) {
                 nums[zeroP] = nums[nZeroP];
                 nums[nZeroP] = 0;
                 zeroP = seekZero(nums, i);
             }
         }
     }

     function seekZero(nums, start) {
         while (start < nums.length && nums[start] !== 0) {
             start++;
         }
         return start;
     }

     function seekNonZero(nums, start) {
         while (start < nums.length && nums[start] === 0) {
             start++;
         }
         return start;
     }
 };
