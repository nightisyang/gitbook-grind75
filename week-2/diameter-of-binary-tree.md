# Diameter of Binary Tree

{% embed url="https://leetcode.com/problems/diameter-of-binary-tree" %}

### Problem

> Given the `root` of a binary tree, return _the length of the **diameter** of the tree_.
>
> The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.
>
> The **length** of a path between two nodes is represented by the number of edges between them.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)
>
> <pre><code>Input: root = [1,2,3,4,5]
> <strong>Output: 3
> </strong><strong>Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: root = [1,2]
> <strong>Output: 1</strong></code></pre>

### Pseudocode

```
- longest path is the left most node travelling to the right most node.
    - traverse the longest path left + longest path right
```

### Solution

```javascript
var diameterOfBinaryTree = function(root) {
    let maxDistance = 0

    function walk(node) {
        // base condition
        if(!node) {
            return 0
        }


        const leftWalk = walk(node.left) 
        const rightWalk = walk(node.right) 
        maxDistance = Math.max(leftWalk + rightWalk, maxDistance)
        return Math.max(leftWalk + 1, rightWalk + 1)
    }

    walk(root)
    return maxDistance
};

```

### Time and Space Complexity

#### Time

* Complete traversal of the tree - O(N)
* Total - O(N)

#### Space

* Memory requirements increase linearly for each recursion stack - O(N)
* Total - O(N)
