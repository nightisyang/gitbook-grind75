# Rotting Oranges

{% embed url="https://leetcode.com/problems/rotting-oranges" %}

### Problem

> You are given an `m x n` `grid` where each cell can have one of three values:
>
> * `0` representing an empty cell,
> * `1` representing a fresh orange, or
> * `2` representing a rotten orange.
>
> Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.
>
> Return _the minimum number of minutes that must elapse until no cell has a fresh orange_. If _this is impossible, return_ `-1`.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2019/02/16/oranges.png)
>
> <pre><code>Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
> <strong>Output: 4</strong></code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
> <strong>Output: -1
> </strong><strong>Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.</strong></code></pre>
>
> **Example 3:**
>
> <pre data-overflow="wrap"><code>Input: grid = [[0,2]]
> <strong>Output: 0
> </strong><strong>Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
var orangesRotting = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const row = grid.length;
  const column = grid[0].length;
  const queue = [];
  let countFresh = 0;
  let minutes = 0;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // put the position of all rotten oranges in queue
  // count the number of fresh oranges
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }

      if (grid[i][j] === 1) {
        countFresh++;
      }
    }
  }

  // if count of fresh oranges is zero, return zero

  if (countFresh === 0) {
    return 0;
  }

  // bfs starting from initially rotten oranges
  while (queue.length !== 0 && countFresh) {
    minutes++;
    let size = queue.length; // set the size before hand,
    for (let i = 0; i < size; i++) {
      // if i is limited by queue.length i.e. i < queue.length, queue.length will be vary dynamically
      const point = queue.shift();

      for (const dir of dirs) {
        const x = point[0] + dir[0];
        const y = point[1] + dir[1];

        // set when to continue, out of bounds, already rotten or empty cell
        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= column ||
          grid[x][y] === 2 ||
          grid[x][y] === 0
        ) {
          continue;
        }

        // if code reaches here, orange is fresh, mark is as rotten
        grid[x][y] = 2;

        // book keeping, if not all fresh oranges are rotten, return -1
        countFresh--;

        // push this the coords of this newly rotten orange into queue to look for next fresh orange
        queue.push([x, y]);
      }
    }
  }
  // count - 1 because minute is 0 based index
  return countFresh === 0 ? minutes : -1;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
