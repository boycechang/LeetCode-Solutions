/** https://leetcode.com/problems/single-number-ii/#/description
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
     var bitArray = new Array(32);
     bitArray.fill(0);
     console.log(bitArray);
     for (var i = 0; i < nums.length; i++) {
         var num = nums[i];
         for (var j = 0; j < 32; j++) {
             if ((num & (1 << j)) !== 0) {
                 bitArray[j]++;
             }
         }
     }

     var result = 0;
     for (j = 0; j < 32; j++) {
         result += ((bitArray[j] % 3) << j);
     }
     return result;
 };
