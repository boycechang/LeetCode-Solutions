/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
     if (l1 === null) {
         return l2;
     } else if (l2 === null) {
         return l1;
     }

     var head = l1;
     var temp = l1.val + l2.val;
     var needPlus = 0;

     head.val = temp % 10;
     if (temp >= 10) {
         needPlus = 1;
     }

     l1 = l1.next;
     l2 = l2.next;

     var current = head;
     while (l1 !== null || l2 !== null) {
         current.next = l1 ? l1 : l2;
         current = current.next;
         temp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + needPlus;
         current.val = temp % 10;
         if (temp >= 10) {
             needPlus = 1;
         } else {
             needPlus = 0;
         }
         l1 = l1 ? l1.next : null;
         l2 = l2 ? l2.next : null;
     }

     if (needPlus) {
         var newnode = new ListNode(1);
         current.next = newnode;
     }

     return head;
 };
