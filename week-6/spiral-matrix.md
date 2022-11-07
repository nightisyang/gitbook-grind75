# Spiral Matrix

{% embed url="https://leetcode.com/problems/spiral-matrix" %}

### Problem

> Given an `m x n` `matrix`, return _all elements of the_ `matrix` _in spiral order_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)
>
> <pre><code>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
> <strong>Output: [1,2,3,6,9,8,7,4,5]</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)
>
> <pre><code>Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
> <strong>Output: [1,2,3,4,8,12,11,10,9,5,6,7]</strong></code></pre>
>
>

### Pseudocode

```
```

### Solution

```javascript
var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix.length) {
    return result;
  }

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let dir = 0;

  while (startRow <= endRow && startCol <= endCol) {
    switch (dir) {
      case 0: //RIGHT
        for (let col = startCol; col <= endCol; col++) {
          result.push(matrix[startRow][col]);
        }
        startRow++;
        break;
      case 1: //DOWN
        for (let row = startRow; row <= endRow; row++) {
          result.push(matrix[row][endCol]);
        }
        endCol--;
        break;
      case 2: //LEFT
        for (let col = endCol; col >= startCol; col--) {
          result.push(matrix[endRow][col]);
        }
        endRow--;
        break;
      case 3: //UP
        for (let row = endRow; row >= startRow; row--) {
          result.push(matrix[row][startCol]);
        }
        startCol++;
        break;
    }
    dir = (dir + 1) % 4;
  }

  return result;
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
