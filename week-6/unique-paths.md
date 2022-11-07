# Unique Paths

{% embed url="https://leetcode.com/problems/unique-paths" %}

### Problem

> There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.
>
> Given the two integers `m` and `n`, return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.
>
> The test cases are generated so that the answer will be less than or equal to `2 * 109`.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/10/22/robot\_maze.png)
>
> <pre><code>Input: m = 3, n = 7
> <strong>Output: 28</strong></code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: m = 3, n = 2
> <strong>Output: 3
> </strong><strong>Explanation:
> </strong>From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
> 1. Right -> Down -> Down
> 2. Down -> Down -> Right
> 3. Down -> Right -> Down</code></pre>

### Pseudocode

```
```

### Solution

```javascript
var uniquePaths = function (m, n) {
  let map = [];

  for (let i = 0; i < m; i++) {
    map.push(new Array(n).fill(0));
  }

  return walk(0, 0, m, n, map, 0);
};

function walk(x, y, m, n, map, count) {
  // base condition
  if (x >= m || y >= n) {
    return 0;
  }

  // we've been here before, just add
  if (map[x][y] !== 0) {
    return map[x][y];
  }

  // if arrived at target return 1
  if (x === m - 1 && y === n - 1) {
    return 1;
  }

  // pre
  // recurse
  const down = walk(x + 1, y, m, n, map, count);
  const right = walk(x, y + 1, m, n, map, count);
  // post
  const sum = down + right;
  map[x][y] = sum;
  count += sum;
  return count;
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
