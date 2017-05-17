/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var searchInsert = function(nums, target) {
     if (nums === null || nums.length === 0) {
         return 0;
     }

     return search(nums, 0, nums.length, target);

     function search(nums, start, end, target) {
         if (start === end) {
             if (nums[start] < target) {
                 return start + 1;
             } else {
                 return start;
             }
         }

         var mid = Math.floor((end - start) / 2 + start);
         if (nums[mid] === target) {
             return mid;
         } else if (nums[mid] > target) {
             return search(nums, start, mid, target);
         } else {
             return search(nums, mid + 1, end, target);
         }
     }
 };
