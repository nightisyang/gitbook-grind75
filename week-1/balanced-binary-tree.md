# Balanced Binary Tree

{% embed url="https://leetcode.com/problems/balanced-binary-tree" %}

### Problem

> Given a binary tree, determine if it is **height-balanced**.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/06/balance\_1.jpg)
>
> <pre><code>Input: root = [3,9,20,null,null,15,7]
> <strong>Output: true</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/06/balance\_2.jpg)
>
> <pre><code>Input: root = [1,2,2,3,3,null,null,4,4]
> <strong>Output: false</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: root = []
> <strong>Output: true</strong></code></pre>
>
>

### Pseudocode

```
recurse over left and right node
 - return 0 when recursion reaches the end of tree
 - return the max height of left and right sub-tree + 1
  - if difference is more than 1, return false

bfs approach is also possible, but dfs is more suited as it finds DEPTH FIRST SEARCH.
```

### Solution

```javascript
var isBalanced = function (root) {
  let result = true;

  if (!root) {
    return true;
  }

  function walkMetrics(node) {
    // base condition
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    let walkLeft = walkMetrics(node.left);
    let walkRight = walkMetrics(node.right);

    // post
    if (Math.abs(walkLeft - walkRight) > 1) {
      result = false;
    }

    return 1 + Math.max(walkLeft, walkRight);
  }

  walkMetrics(root);

  return result;
};

```

### Time and Space Complexity

#### Time

* Recurse to find the max depth and compare the max height of left and right subtrees. Scales linearly with input size all nodes are visited. O(N)
* Total - O(N)

#### Space

* Memory requirements of recursive stack also scales linearly to input. O(N)
* Total - O(N)
