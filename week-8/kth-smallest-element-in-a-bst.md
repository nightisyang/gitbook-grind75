# Kth Smallest Element in a BST

{% embed url="https://leetcode.com/problems/kth-smallest-element-in-a-bst" %}

### Problem

> Given the `root` of a binary search tree, and an integer `k`, return _the_ `kth` _smallest value (**1-indexed**) of all the values of the nodes in the tree_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)
>
> <pre><code>Input: root = [3,1,4,null,2], k = 1
> <strong>Output: 1</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)
>
> <pre><code>Input: root = [5,3,6,2,4,null,null,1], k = 3
> <strong>Output: 3</strong></code></pre>

### Pseudocode

```
- leverage on behaviour of dfs
    - recurse to end of left child node
    - then return the kth node
```

### Solution

```javascript
// BST - node.right < node < node.left
// kth smallest - need to find the smallest, then find the kth smallest on the way back
var kthSmallest = function (root, k) {
  let count = 0;
  let smallestK = null;

  function walk(node) {
    // base condition
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    walk(node.left);
    count++;
    // console.log(`smallest ${count}: ${node.val}`)
    if (count === k) {
      smallestK = node.val;
    }
    walk(node.right);
    // post
  }

  walk(root);

  return smallestK;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
