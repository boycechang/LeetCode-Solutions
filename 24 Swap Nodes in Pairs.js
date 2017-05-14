/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
     if (head === null || head.next === null) {
         return head;
     }
     var current = head;
     while (current !== null && current.next !== null) {
         var temp = current.val;
         current.val = current.next.val;
         current.next.val = temp;
         current = current.next.next;
     }
     return head;
 };
