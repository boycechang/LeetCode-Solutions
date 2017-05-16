/** https://leetcode.com/problems/copy-list-with-random-pointer/#/description
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
 var copyRandomList = function(head) {
     if (head === null) {
         return null;
     }

     var current;

     current = head;
     while (current !== null) {
         var node = new RandomListNode(current.label);
         node.next = current.next;
         node.random = current.random;
         current.next = node;
         current = node.next;
     }

     current = head;
     while (current !== null) {
         if (current.random !== null) {
             current.next.random = current.random.next;
         }
         current = current.next.next;
     }

     var newHead = head.next;
     current = head;
     while (current.next !== null) {
         var temp = current.next;
         current.next = temp.next;
         current = temp;
     }

     return newHead;
 };
