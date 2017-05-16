/** https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/#/description
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var current;

var generateBST = function(start, end) {
    if (end <= start) {
        return null;
    }
    var mid = Math.floor((end - start) / 2 + start);
    var left = generateBST(start, mid);

    var node = new TreeNode(current.val);
    current = current.next;

    node.left = left;
    node.right = generateBST(mid + 1, end);
    return node;
}


var sortedListToBST = function(head) {
    current = head;
    var n = 0;
    while (head !== null) {
        head = head.next;
        n++;
    }
    return generateBST(0, n);
};
