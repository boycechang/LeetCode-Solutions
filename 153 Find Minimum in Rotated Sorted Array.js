/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
     if (nums === null || nums.length === 0) {
         return null;
     }

     var minimum = Number.POSITIVE_INFINITY;
     var p = 0;
     while (p < nums.length) {
         if (nums[p] < minimum) {
             minimum = nums[p];
         }
         p++;
     }
     return minimum;
 };
