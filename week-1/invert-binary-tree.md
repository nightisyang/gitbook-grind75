# Invert Binary Tree

{% embed url="https://leetcode.com/problems/invert-binary-tree/" %}

### Problem

> Given the `root` of a binary tree, invert the tree, and return _its root_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
>
> <pre><code>Input: root = [4,2,7,1,3,6,9]
> <strong>Output:
> </strong> [4,7,2,9,6,3,1]</code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
>
> <pre><code>Input: root = [2,1,3]
> <strong>Output:
> </strong> [2,3,1]</code></pre>
>
> **Example 3:**
>
> <pre><code>Input: root = []
> <strong>Output:
> </strong> []</code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
inverting a tree involves swapping the left and right child nodes
generally
let temp = node.left
node.left = node.right
node.right = temp

in the example for the tree with 3 node height, the left most node is inverted to be the right most node.

two methods to traverse a binary tree. dfs, bfs.

dfs solution
swap left and right nodes in post traversal

bfs solution

```
{% endcode %}

### Solution

```javascript
// dfs
var invertTree = function (root) {
  function walk(node) {
    // base condition
    if (!node) {
      return;
    }

    // pre
    // console.log(node.val)
    // recurse
    walk(node.left);
    walk(node.right);
    // post
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  walk(root);

  return root;
};

//bfs
var invertTree = function(root) {
    if(!root) {
        return null;
    }

    let q = [root];

    while(q.length) {
        const node = q.pop()

        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    return root
};

```

### Time and Space Complexity

#### Time

* While traversal/searching of BT is usually O(height), inversion requires complete traversal of all inputs, regardless of bfs or dfs. O(N)
* Total - O(N)

#### Space

* Returning the same node length O(N)
* Total - O(N)
