/** https://leetcode.com/problems/balanced-binary-tree/#/description
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

var treeHeight = function(root) {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    var leftHeight = treeHeight(root.left);
    if (leftHeight === -1) {
        return -1;
    }

    var rightHeight = treeHeight(root.right);
    if (rightHeight === -1) {
        return -1;
    }

    if (leftHeight - rightHeight < -1 || leftHeight - rightHeight > 1) {
        return -1;
    } else {
        return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
    }
}

var isBalanced = function(root) {
    if (treeHeight(root) === -1) {
        return false;
    } else {
        return true;
    }
};
