# Linked Lists – Fundamentals

A **Linked List** is a linear data structure where elements (called **nodes**) are connected using **pointers/references**. Unlike arrays, linked lists do not store elements in contiguous memory locations.

---

## 📌 Structure of a Node
Each node in a linked list has two parts:
1. **Data** – the value stored in the node.
2. **Next** – a pointer (or reference) to the next node in the list.

Example (singly linked node):
[Data | Next] -> [Data | Next] -> [Data | Next] -> null


---

## 📌 Types of Linked Lists

1. **Singly Linked List**
   - Each node points to the next node.
   - Traversal is one-way (forward).
   - Structure:
     ```
     Head -> [Data | Next] -> [Data | Next] -> null
     ```

2. **Doubly Linked List**
   - Each node has two references: one to the next node and one to the previous node.
   - Supports two-way traversal.
   - Structure:
     ```
     null <- [Prev | Data | Next] <-> [Prev | Data | Next] -> null
     ```

3. **Circular Linked List**
   - The last node points back to the head instead of `null`.
   - Can be singly or doubly linked.
   - Structure:
     ```
     Head -> [Data | Next] -> [Data | Next] -+
              ^-----------------------------+
     ```

---

## 📌 Basic Operations

1. **Traversal** – Going through all the nodes one by one.
2. **Insertion** – Adding a new node:
   - At the beginning
   - At the end
   - At a given position
3. **Deletion** – Removing a node:
   - From the beginning
   - From the end
   - From a given position
4. **Searching** – Finding an element in the list.

---

## 📌 Advantages of Linked Lists
- **Dynamic size**: Unlike arrays, they can grow or shrink at runtime.
- **Efficient insertions/deletions**: Adding/removing elements does not require shifting elements as in arrays.

---

## 📌 Disadvantages of Linked Lists
- **Memory overhead**: Each node needs extra memory for a pointer.
- **No random access**: To access the i-th element, traversal from the head is required (O(n)).
- **Cache unfriendly**: Elements are not stored contiguously in memory.

---

## 📌 Time Complexity

| Operation           | Singly Linked List | Doubly Linked List |
|---------------------|---------------------|--------------------|
| Access (by index)   | O(n)               | O(n)              |
| Search              | O(n)               | O(n)              |
| Insertion (front)   | O(1)               | O(1)              |
| Insertion (end)     | O(n) \*            | O(1) \*\*         |
| Deletion (front)    | O(1)               | O(1)              |
| Deletion (end)      | O(n)               | O(1)              |

\* O(1) if we maintain a tail pointer.  
\*\* Only O(1) if we have a tail pointer.

---

## 📌 When to Use Linked Lists
- When you need frequent insertions/deletions.
- When the total number of elements is unknown or changes frequently.
- When memory reallocation of arrays is costly.

---

## 📌 Visual Example

Singly Linked List with values `10 → 20 → 30`:


---

## 📌 Summary
- Linked lists are flexible data structures with efficient insertions/deletions.
- They sacrifice random access and add memory overhead for pointers.
- Different types (singly, doubly, circular) are suited for different scenarios.

## Practice Problems

1.  [x] Add Two Numbers