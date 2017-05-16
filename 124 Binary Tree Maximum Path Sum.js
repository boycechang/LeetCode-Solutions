/** https://leetcode.com/problems/binary-tree-maximum-path-sum/#/description
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSum;

var treeSum = function(root) {
    var leftSum = root.left === null ? 0 : treeSum(root.left);
    var rightSum = root.right === null ? 0 : treeSum(root.right);
    var sumMax = leftSum + rightSum + root.val;
    var singleMax = leftSum > rightSum ? leftSum + root.val : rightSum + root.val;

    if (sumMax > maxSum) {
        maxSum = sumMax;
    }

    return singleMax > 0 ? singleMax : 0;
}

var maxPathSum = function(root) {
    if (root === null) {
        return 0;
    }
    maxSum = root.val;
    treeSum(root);
    return maxSum;
};
