/**
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

var invert = function(root) {
    if (root === null) {
        return null;
    }

    invert(root.left);
    invert(root.right);
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
}

var invertTree = function(root) {
    invert(root);
    return root;
};
