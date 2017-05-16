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

var depth = function(nodeList) {
    while (nodeList.length !== 0) {
        var head = nodeList[0];
        if (head.left !== null) {
            head.left.level = head.level + 1;
            nodeList.push(head.left);
        }

        if (head.right !== null) {
            head.right.level = head.level + 1;
            nodeList.push(head.right);
        }

        if (head.left === null && head.right === null) {
            return head.level;
        }

        nodeList.splice(0, 1);
    }
}

var minDepth = function(root) {
    if (root === null) {
        return 0;
    }

    nodeList = [];
    root.level = 1;
    nodeList.push(root);
    return depth(nodeList);
};
