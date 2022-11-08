# Number of Islands

{% embed url="https://leetcode.com/problems/number-of-islands" %}

### Problem

> Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return _the number of islands_.
>
> An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: grid = [
>   ["1","1","1","1","0"],
>   ["1","1","0","1","0"],
>   ["1","1","0","0","0"],
>   ["0","0","0","0","0"]
> ]
> <strong>Output: 1</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: grid = [
>   ["1","1","0","0","0"],
>   ["1","1","0","0","0"],
>   ["0","0","1","0","0"],
>   ["0","0","0","1","1"]
> ]
> <strong>Output: 3</strong></code></pre>

### Pseudocode

```
- two step dfs approach, more efficient to do bfs similar to rotten oranges
```

### Solution

```javascript
var numIslands = function (grid) {
  const seen = [];
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    seen.push(new Array(grid[0].length).fill(false));
  }

  function sailingSevenSeas(x, y, prev) {
    // base condition
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return;
    }

    if (seen[x][y]) {
      return;
    }

    //pre
    seen[x][y] = true;
    let currVal = grid[x][y];

    if (currVal === "1" && prev === "0") {
      // console.log('found island at:', `${x}, ${y}`)
      islandCount += 1;
      // console.log('**** LAND SEARCH PARTY ****')
      walkTheBeach(x, y);
    }

    // console.log('###### ARRRRRRR LETS GO SAILING ######')

    // recurse and find other 1s until all other 1s turn to 0
    sailingSevenSeas(x, y + 1, currVal);
    sailingSevenSeas(x + 1, y, currVal);
    sailingSevenSeas(x - 1, y, currVal);
    sailingSevenSeas(x, y + 1, currVal);
    //post
  }

  function walkTheBeach(x, y) {
    // base condition
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return;
    }

    if (grid[x][y] === "0") {
      // console.log('we are at the beach, mark and return')
      return;
    }

    // claim the contiguos island, other PIRATES can't claim if they can't see it
    grid[x][y] = "0";
    // console.log('exploring...')
    walkTheBeach(x + 1, y);
    walkTheBeach(x, y + 1);
    walkTheBeach(x - 1, y);
    walkTheBeach(x, y - 1);
  }

  sailingSevenSeas(0, 0, "0");

  return islandCount;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
