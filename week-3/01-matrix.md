# 01 Matrix

{% embed url="https://leetcode.com/problems/01-matrix" %}

### Problem

> Given an `m x n` binary matrix `mat`, return _the distance of the nearest_ `0` _for each cell_.
>
> The distance between two adjacent cells is `1`.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg)
>
> <pre><code>Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
> <strong>Output: [[0,0,0],[0,1,0],[0,0,0]]</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg)
>
> <pre><code>Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
> <strong>Output: [[0,0,0],[0,1,0],[1,2,1]]</strong></code></pre>

### Pseudocode

```
- rephrase question as find shortest distance of 1 to 0
- use a queue, start with 0 value cells and reassign 1 to -1
- while queue is not empty
    - iterate through queue (where cells were 0 value), in 4 directions
    - if cells are -1 while traversing, push it into queue
    - reassign cell value to origin cell from where it traverse + 1
```

### Solution

```javascript
// https://leetcode.com/problems/01-matrix/
// from solutions

// from solutions
// https://leetcode.com/problems/01-matrix/solutions/1369741/c-java-python-bfs-dp-solutions-with-picture-clean-concise-o-1-space/
var updateMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dir = [0, 1, 0, -1, 0];

  let q = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        q.push([i, j]);
      } else {
        matrix[i][j] = -1;
      }
    }
  }

  while (q.length) {
    const [r, c] = q.shift();
    // console.log(q)

    for (let i = 0; i < 4; i++) {
      let nr = r + dir[i];
      let nc = c + dir[i + 1];

      if (nr < 0 || nr === m || nc < 0 || nc === n || matrix[nr][nc] !== -1) {
        continue;
      }

      matrix[nr][nc] = matrix[r][c] + 1;
      q.push([nr, nc]);
    }
    // console.log(matrix)
  }

  return matrix;
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
