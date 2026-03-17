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

function mergeKLists(lists) {
    let smallest = null;
    let smallestIndex = 0;
    
    for (let i = 0; i < lists.length; i++) {
        if(lists[i] == null) continue;

        console.log(lists[i].val)
        if(smallest == null) {
            smallest = lists[i];
            smallestIndex = i;
        } else if (lists[i].val < smallest.val) {
            smallest = lists[i];
            smallestIndex = i;
        }
    }

    if(smallest == null) return null;
  
    const removed = lists[smallestIndex];
    if(lists[smallestIndex].next) {
        lists[smallestIndex] = lists[smallestIndex].next;
    } else {
        lists[smallestIndex] = null;
    }

    removed.next = mergeKLists(lists);

    return removed;
};