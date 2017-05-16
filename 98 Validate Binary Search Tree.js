/** https://leetcode.com/problems/validate-binary-search-tree/#/description
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var nodeList;

 var midTree = function(root) {
     if (root === null) return true;

     if (!midTree(root.left)) {
         return false;
     }

     if (nodeList.length !== 0 && nodeList[nodeList.length -1] >= root.val) {
         return false;
     } else {
         nodeList.push(root.val);
     }

     if(!midTree(root.right)) {
         return false;
     };
 }

 var isValidBST = function(root) {
     nodeList = [];
     midTree(root);

     for (var i = 0; i < nodeList.length - 1; i++) {
         if (nodeList[i] >= nodeList[i + 1]) {
             return false;
         }
     }
     return true;
 };
