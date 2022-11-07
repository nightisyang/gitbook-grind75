# Maximum Depth of Binary Tree

{% embed url="https://leetcode.com/problems/maximum-depth-of-binary-tree" %}

### Problem

> Given the `root` of a binary tree, return _its maximum depth_.
>
> A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
>
> <pre><code>Input: root = [3,9,20,null,null,15,7]
> <strong>Output: 3</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: root = [1,null,2]
> <strong>Output: 2</strong></code></pre>

### Pseudocode

```
simple dfs traversal
    - if no node return
    - recurse
    - return + 1
```

### Solution

```javascript
var maxDepth = function (root) {
  function walk(node) {
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    let leftDepth = walk(node.left);
    let rightDepth = walk(node.right);
    // post

    // this is the increment
    return Math.max(leftDepth, rightDepth) + 1;
  }

  return walk(root);
};
```

### Time and Space Complexity

#### Time

* traverse trough all the child nodes to find the deepest node - O(N)
* Total - O(N)

#### Space

* maximum memory requirement for traversing a BT - O(height)
* Total - O(height)
