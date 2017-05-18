/** https://leetcode.com/problems/maximum-subarray/#/description
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     if (nums === null || nums.length === 0) {
         return 0;
     }
     return maxSum(nums, 0, nums.length - 1);

     function maxSum(nums, start, end) {
         if (start > end) {
             return Number.NEGATIVE_INFINITY;
         }

         var mid = Math.floor((start + start) / 2);
         var leftMaxSum = maxSum(nums, start, mid - 1);
         var rightMaxSum = maxSum(nums, mid + 1, end);

         var leftLineMaxSum = 0;
         var sum = 0;
         for (var i = mid - 1; i >= start; i--) {
             sum += nums[i];
             if (sum >= leftLineMaxSum) {
                 leftLineMaxSum = sum;
             }
         }

         var rightLineMaxSum = 0;
         sum = 0;
         for (i = mid + 1; i <= end; i++) {
             sum += nums[i];
             if (sum >= rightLineMaxSum) {
                 rightLineMaxSum = sum;
             }
         }

         return Math.max(leftLineMaxSum + nums[mid] + rightLineMaxSum, Math.max(leftMaxSum, rightMaxSum));
     }
 };
 
