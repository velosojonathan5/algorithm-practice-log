/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function mergeTwoLists(list1, list2) {
    let currentNode = new ListNode(0);
    let head = currentNode;

    while (list1 != null && list2 != null) {

        if(list1.val < list2.val) {
            currentNode.next = new ListNode(list1.val);
            currentNode = currentNode.next;
            list1 = list1.next;
        } else {
            currentNode.next = new ListNode(list2.val);
            currentNode = currentNode.next;
            list2 = list2.next;
        }
    }

    if (list1 != null) {
        currentNode.next = list1;
    }
    if (list2 != null) {
        currentNode.next = list2;
    }

    return head.next;
};