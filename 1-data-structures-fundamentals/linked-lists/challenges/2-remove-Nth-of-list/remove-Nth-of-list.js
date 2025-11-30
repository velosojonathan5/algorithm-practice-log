function removeNthFromEnd(head, n) {
    if (head.next == null) {
        return null
    }

    let current = head;
    let count = 0;
    let prevNode = head;

    while(current != null) {
        count++;
        if (count > n) {
            if(current.next == null){
                prevNode.next = prevNode.next.next
            } else {
                prevNode = prevNode.next;
            }
        }
        current = current.next;
    }

    // TODO: check if it's possible to eliminate it
    if(count <= n){
        head = head.next
    }

    return head;
};