/** https://leetcode.com/problems/maximum-depth-of-binary-tree/#/description
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

 var depth = function(root) {
     if (root === null) {
         return 0;
     }

     var leftDepth = depth(root.left);
     var rightDepth = depth(root.right);

     var max = 0;
     if (leftDepth >= rightDepth) {
         max = leftDepth + 1;
     } else {
         max = rightDepth + 1;
     }

     return max;
 }

 var maxDepth = function(root) {
     return depth(root);
 };
