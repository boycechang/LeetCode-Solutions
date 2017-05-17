/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
     if (nums === null || nums.length === 0) {
         return null;
     }

     var l = 0;
     var r = nums.length - 1;

     while (l < r) {
         var mid = Math.floor( (r + l) / 2);
         if (nums[mid] > nums[r]) {
             l = mid + 1;
         } else {
             r = mid;
         }
     }
     return nums[l];
 };
