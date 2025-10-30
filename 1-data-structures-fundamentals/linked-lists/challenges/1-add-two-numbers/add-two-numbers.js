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

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null || carry !==0) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
};


// alternative solution
/**function linkedListToNumber(list: ListNode): number {
    let multiplier = 10;
    let number = list.val;
    list = list.next;

    while (list != null) {
        number = (list.val * multiplier) + number;
        multiplier = multiplier * 10;
        list = list.next;
    }

    return number;
}

class MyLinkedList {
    head: ListNode | null = null;

    addNode(number: number) {
        if(this.head == null) {
            this.head = new ListNode(number, null);
            return;
        }

        let current = this.head;

        while(current != null) {
            if(current.next == null) {
                current.next = new ListNode(number, null);
                return;
            }
            current = current.next;
        }
    }
}

function numberToLinkedList(val: number): ListNode {
    const list = new MyLinkedList()

    do {
        let rest = val % 10;
        val = Math.floor(val / 10);
        list.addNode(rest);
    } while (val > 0);
    return list.head;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return numberToLinkedList(linkedListToNumber(l1) + linkedListToNumber(l2))
}; */