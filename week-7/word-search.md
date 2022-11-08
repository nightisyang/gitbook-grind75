# Word Search

{% embed url="https://leetcode.com/problems/word-search" %}

### Problem

> Given an `m x n` grid of characters `board` and a string `word`, return `true` _if_ `word` _exists in the grid_.
>
> The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)
>
> <pre><code>Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
> <strong>Output: true</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg)
>
> <pre><code>Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
> <strong>Output: true</strong></code></pre>
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/15/word3.jpg)
>
> <pre><code>Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
> <strong>Output: false</strong></code></pre>

### Pseudocode

```
- dfs recursion to recurse over matrix
- seen array to prevent infinite loop

- is bfs possible?
```

### Solution

```javascript
var exist = function (board, word) {
  const seen = [];

  for (let i = 0; i < board.length; i++) {
    seen.push(new Array(board[0].length).fill(false));
  }

  function walk(x, y, idx) {
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
      // console.log('out of bounds')
      return false;
    }

    // console.log(x, y, idx, word[idx])

    if (seen[x][y]) {
      // console.log('seen')
      return;
    }

    if (board[x][y] === word[idx]) {
      // console.log('found letter, incrementing')
      idx++;
    } else {
      // console.log('did not find letter')
      return;
    }

    if (idx === word.length) {
      return true;
    }

    // pre
    seen[x][y] = true;
    // recurse
    const down = walk(x + 1, y, idx);
    const right = walk(x, y + 1, idx);
    const up = walk(x - 1, y, idx);
    const left = walk(x, y - 1, idx);
    //post
    if (down || right || up || left) {
      // console.log('found path')
      return true;
    }

    // console.log('did not find path')
    seen[x][y] = false;
    return false;
  }
  // return walk(0, 0, 0)

  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[0].length; n++) {
      if (walk(m, n, 0)) {
        return true;
      }
    }
  }

  return false;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
