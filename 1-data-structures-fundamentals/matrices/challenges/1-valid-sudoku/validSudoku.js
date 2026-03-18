function isValidLines(board) {
    for(let i = 0; i < board.length; i++) {
        const mapValues = new Map();
        for(let j = 0; j < board[i].length; j++) {
            const val = board[i][j];
            if(mapValues.get(val) === 1) {
                return false;
            }

            if(val !== '.') {
                mapValues.set(val, 1);
            }
        }
    }
    return true;
}

function isValidcolumns(board) {
    for(let j = 0; j < board.length; j++) {
        const mapValues = new Map();
        for(let i = 0; i < board[j].length; i++) {
            const val = board[i][j];
            if(mapValues.get(val) === 1) {
                return false;
            }

            if(val !== '.') {
                mapValues.set(val, 1);
            }
        }
    }
    return true;
}

function isValidSubBox(startI, StartJ, board) {
    const size = 3;
    const mapValues = new Map();
    for(let i = startI; i < startI + size; i++) {
        for(let j = StartJ; j < StartJ + size; j++) {
            const val = board[i][j];
            if(mapValues.get(val) === 1) {
                return false;
            }
            if(val !== '.') {
                mapValues.set(val, 1);
            }
        }
    }

    return true;
}

function isValidSudoku(board) {
    if(!isValidLines(board) || !isValidcolumns(board)) return false;

    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            if(!isValidSubBox(i, j, board)) return false;
        }
    }
    return true;
};

// Example test
const board1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const board2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board1)); // true
console.log(isValidSudoku(board2)); // false
