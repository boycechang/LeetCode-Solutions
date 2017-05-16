/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var generateTree = function(nums, start, end) {
    if (end - start <= 0) {
        return null;
    }

    var middle = Math.floor((end - start) / 2 + start);
    var parent = new TreeNode(nums[middle]);

    parent.left = generateTree(nums, start, middle);
    parent.right = generateTree(nums, middle + 1, end);

    return parent;
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    return generateTree(nums, 0, nums.length);
};
