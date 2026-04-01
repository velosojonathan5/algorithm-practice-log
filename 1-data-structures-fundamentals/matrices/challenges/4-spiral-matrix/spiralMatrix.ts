
class ListNode1 {
    val: string
    next: ListNode1 | null
    constructor(val: string, next: ListNode1 | null) {
        this.val = val
        this.next = next
    }
}

function spiralOrder(matrix: number[][]): number[] {
    let headDitections = new ListNode1('left', null);
    headDitections.next = new ListNode1('down', new ListNode1('right', new ListNode1('up', headDitections)));
    let N = matrix.length;
    let M = matrix[0].length;
    const spiral = [];
    let i = 0;
    let j = -1;

    while(M > 0 && N > 0) {
        // move horizontal
        for(let steps = 0; steps < M; steps++) {
            if(headDitections.val == 'left') j = j + 1;
            if(headDitections.val == 'right') j = j - 1;
            spiral.push(matrix[i][j]);
        }
        headDitections = headDitections.next as ListNode1;
        N--;
        // move vertical
        for(let steps = 0; steps < N; steps++) {
            if(headDitections.val == 'down') i = i + 1;
            if(headDitections.val == 'up') i = i - 1;
            spiral.push(matrix[i][j]);
        }
        headDitections = headDitections.next as ListNode1;
        M--;
    }

    return spiral;
};