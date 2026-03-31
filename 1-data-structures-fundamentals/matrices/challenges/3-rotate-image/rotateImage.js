function rotate(matrix) {
    let p = Math.floor(matrix.length / 2) - 1;;
    while(p >= 0) {
        let temp = matrix[p][p]
        const width = (matrix.length - (p * 2));
        let rounds = width - 1;
        let j = p;
        while(rounds > 0){
            const position1 = matrix[p][j];
            const position2 = matrix[p + rounds][p];
            const position3 = matrix[p + width - 1][p + rounds];
            const position4 = matrix[(p + width - 1) - rounds][p + width - 1];

            matrix[p][j] = position2;
            matrix[p + rounds][p] = position3;
            matrix[p + width - 1][p + rounds] = position4;
            matrix[(p + width - 1) - rounds][p + width - 1] = position1;
        
            j = j+1;
            rounds--;
        }
        p--;
    }
};

// Test cases
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Original matrix1:", JSON.stringify(matrix1));
rotate(matrix1);
console.log("Rotated matrix1:", JSON.stringify(matrix1));
// Expected: [[7,4,1],[8,5,2],[9,6,3]]

let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log("Original matrix2:", JSON.stringify(matrix2));
rotate(matrix2);
console.log("Rotated matrix2:", JSON.stringify(matrix2));
// Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]