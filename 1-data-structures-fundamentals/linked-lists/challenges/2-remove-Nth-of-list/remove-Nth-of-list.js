// the solution is using a two pointers solution

function removeNthFromEnd(head, n) {
    const dummy = { val: 0, next: head };
    let fast = dummy;
    let slow = dummy;

    // Move fast n+1 steps
    for(let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both until fast reach the end
    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow.next é o nó a remover
    slow.next = slow.next.next;

    return dummy.next;
};