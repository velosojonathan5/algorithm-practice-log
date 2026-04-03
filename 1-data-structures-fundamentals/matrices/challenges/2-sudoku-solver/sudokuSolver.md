# Sudoku Solver

## Problem Description
Write a program to solve a Sudoku puzzle by filling the empty cells with digits 1-9 such that each row, column, and 3x3 sub-box contains all digits from 1 to 9 without repetition.

The Sudoku board is represented as a 9×9 2D array where:
- Empty cells are represented by `0`
- Filled cells contain digits 1-9

## Constraints
- The input board is a valid Sudoku puzzle with exactly one solution
- Only one valid solution exists for the input
- Output should modify the board in-place

## Example

**Input:**
```
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
```

**Output:**
```
[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
```

## Approach
**Backtracking Algorithm:**
1. Find the first empty cell (value = 0)
2. Try placing digits 1-9 in that cell
3. Check if the placement is valid (no conflicts in row, column, or 3x3 box)
4. If valid, move to the next empty cell recursively
5. If invalid or recursion fails, backtrack and try the next digit
6. Continue until the puzzle is solved or all possibilities are exhausted

## Complexity Analysis
- **Time Complexity**: O(9^(n*n)) in the worst case, where n=9. However, with constraints and pruning, it's much faster in practice.
- **Space Complexity**: O(1) if we don't count the recursion stack, or O(n²) for the call stack in the worst case.

## Key Insights
- Backtracking is ideal for constraint satisfaction problems like Sudoku
- Early pruning of invalid placements significantly reduces search space
- Validity checks are essential to avoid unnecessary recursive calls
