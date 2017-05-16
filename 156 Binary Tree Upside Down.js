/** https://leetcode.com/problems/binary-tree-upside-down/#/description
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var newHead;

 function reverse(parent, node) {
     if (node === null) {
         return;
     }

     if (node.left !== null) {
         reverse(node, node.left);
     } else if (newHead === null) {
         newHead = node;
     }

     node.left = parent.right;
     node.right = parent;
     parent.left = null;
     parent.right = null;
 }

 var upsideDownBinaryTree = function(root) {
     if (root === null) {
         return null;
     }
     newHead = !root.left ? root : null;
     reverse(root, root.left);
     return newHead;
 };
