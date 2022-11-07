# Binary Tree Level Order Traversal

{% embed url="https://leetcode.com/problems/binary-tree-level-order-traversal" %}

### Problem

> Given the `root` of a binary tree, return _the level order traversal of its nodes' values_. (i.e., from left to right, level by level).
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
>
> <pre><code>Input: root = [3,9,20,null,null,15,7]
> <strong>Output: [[3],[9,20],[15,7]]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: root = [1]
> <strong>Output: [[1]]</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: root = []
> <strong>Output: []</strong></code></pre>

### Pseudocode

```
- bfs is more suited as it traverses breath first
- solution is dfs lol
  - just have to track each level while traversing left and right child
    - push node value in the same array index
    - i.e. root node, 0, goes into arr[0]
    - first left and right child nodes, count 1, goes into arr[1] etc.. 
```

### Solution

```javascript
// https://leetcode.com/problems/binary-tree-level-order-traversal/
var levelOrder = function (root) {
  let output = [];

  if (!root) {
    return [];
  }

  function walk(node, count) {
    // base condition
    if (!node) {
      return;
    }

    // pre
    if (!output[count]) {
      output.push([]);
    }
    // push into output array of the same level
    output[count].push(node.val);

    // recurse
    walk(node.left, count + 1);
    walk(node.right, count + 1);
    // post
  }

  walk(root, 0);
  return output;
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
