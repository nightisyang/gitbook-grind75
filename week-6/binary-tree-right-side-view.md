# Binary Tree Right Side View

{% embed url="https://leetcode.com/problems/binary-tree-right-side-view" %}

### Problem

> Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return _the values of the nodes you can see ordered from top to bottom_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)
>
> <pre><code>Input: root = [1,2,3,null,5,null,4]
> <strong>Output: [1,3,4]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: root = [1,null,3]
> <strong>Output: [1,3]</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: root = []
> <strong>Output: []</strong></code></pre>

### Pseudocode

```
- initial thought and implementation was bfs, traverse right child
- bfs more suited as it pushes all right child instead of going right branch only
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/binary-tree-right-side-view/solutions/382850/simple-javascript-bfs-solution-using-queue/
var rightSideView = function (root) {
  const result = [];
  const queue = [];

  if (root === null) return result;

  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    // console.log(queue)
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      // only pushing, right node [left, right] in queue, or if it's the only node, e.g index 0
      if (i === size - 1) result.push(n.val);
      if (n.left !== null) queue.push(n.left);
      if (n.right !== null) queue.push(n.right);
    }
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
