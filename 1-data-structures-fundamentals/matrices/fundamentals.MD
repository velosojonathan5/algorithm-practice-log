# Matrices Fundamentals

## Overview
Matrices are two-dimensional arrays that store elements in a grid-like structure. They are fundamental in computer science, especially in areas like image processing, graph algorithms, and dynamic programming. Understanding matrix operations is essential for solving problems involving spatial data and transformations.

---

## Characteristics
1. **Two Dimensions**: Matrices have rows and columns, forming a rectangular grid.
2. **Indexing**: Elements are accessed using row and column indices (e.g., matrix[row][col]).
3. **Contiguous Memory**: In some languages, stored as a contiguous block; in others, as arrays of arrays.
4. **Homogeneity**: Typically store elements of the same data type.

---

## Common Operations
### **1. Traversal**
Iterating through all elements of the matrix.
```python
# Example in Python:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for row in matrix:
    for element in row:
        print(element)
```

### **2. Row-wise Traversal**
Processing elements row by row.
```python
for i in range(len(matrix)):
    for j in range(len(matrix[0])):
        print(matrix[i][j])
```

### **3. Column-wise Traversal**
Processing elements column by column.
```python
for j in range(len(matrix[0])):
    for i in range(len(matrix)):
        print(matrix[i][j])
```

### **4. Diagonal Traversal**
Accessing elements along the main diagonal or anti-diagonal.
```python
# Main diagonal
for i in range(min(len(matrix), len(matrix[0]))):
    print(matrix[i][i])

# Anti-diagonal
for i in range(min(len(matrix), len(matrix[0]))):
    print(matrix[i][len(matrix[0])-1-i])
```

### **5. Searching**
Finding an element in the matrix.
- **Linear Search**: O(rows * cols)
- **Binary Search**: Possible if sorted (e.g., row-wise or column-wise)

### **6. Updating**
Changing the value of an element at a specific position. This is O(1).
```python
matrix[1][2] = 10  # Updates the element at row 1, column 2
```

---

## Advantages
- **Spatial Representation**: Ideal for representing grids, images, and 2D data.
- **Direct Access**: O(1) time for accessing elements by indices.
- **Versatility**: Supports various traversal patterns and operations.

## Disadvantages
- **Memory Usage**: Can be memory-intensive for large matrices.
- **Complexity**: Operations like rotation or transposition require careful implementation.
- **Cache Performance**: Depending on storage, may not be as cache-friendly as 1D arrays.

---

## Applications
1. Image processing and computer vision.
2. Graph representation (adjacency matrices).
3. Dynamic programming problems (e.g., grid-based paths).
4. Matrix operations in mathematics and machine learning.

---

## Practice Problems

1. [x] Valid Sudoku
2. [] Sudoku Solver
3. [x] Rotate Image
4. [x] Spiral Matrix
5. [x] Spiral Matrix II
6. [] Island Perimeter

<!-- 2. [ ] Spiral Matrix
3. [ ] Rotate Matrix
4. [ ] Set Matrix Zeroes
5. [ ] Search a 2D Matrix
6. [ ] Valid Sudoku
7. [ ] Word Search
8. [ ] Number of Islands
9. [ ] Surrounded Regions
10. [ ] Maximal Rectangle -->