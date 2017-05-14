/** https://leetcode.com/problems/merge-k-sorted-lists/#/description
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

var mergeKLists = function(lists) {
    lists = lists.clean(null);

    if (lists.length === 0) {
        return null;
    }

    var head = new ListNode(0);
    var current = head;

    while (1) {
        var smallest = 0;
        for (i = 0; i < lists.length; i++) {
            if (lists[i].val < lists[smallest].val) {
                smallest = i;
            }
        }

        current.val = lists[smallest].val;
        if (lists[smallest].next === null) {
            lists.splice(smallest, 1);
        } else {
            lists[smallest] = lists[smallest].next;
        }

        if (lists.length !== 0) {
            var temp = new ListNode(0);
            current.next = temp;
            current = temp;
        } else {
            break;
        }
    }

    return head;
};
