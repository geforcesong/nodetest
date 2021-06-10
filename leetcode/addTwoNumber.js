/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1;
    }

    let bb = 0;
    let p, head;
    while (l1 || l2) {
        const v1 = l1 && l1.val || 0;
        const v2 = l2 && l2.val || 0;
        const result = v1 + v2 + bb;
        bb = Math.floor(result / 10);
        if (!p) {
            p = new ListNode(result % 10);
            head = p;
        } else {
            p.next = new ListNode(result % 10);
            p = p.next;
        }
    }
    return head;
};