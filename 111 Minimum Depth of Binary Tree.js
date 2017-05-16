/** https://leetcode.com/problems/minimum-depth-of-binary-tree/#/description
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

     if (root.left === null) {
         return depth(root.right) + 1;
     } else if (root.right === null) {
         return depth(root.left) + 1;
     } else {
         var leftDepth = depth(root.left);
         var rightDepth = depth(root.right);
         return (leftDepth < rightDepth ? leftDepth : rightDepth) + 1;
     }
 }

 var minDepth = function(root) {
     return depth(root);
 };
