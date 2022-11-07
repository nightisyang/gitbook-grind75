# Construct Binary Tree from Preorder and Inorder Traversal

{% embed url="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal" %}

### Problem

> Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return _the binary tree_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
>
> <pre><code>Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
> <strong>Output: [3,9,20,null,null,15,7]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: preorder = [-1], inorder = [-1]
> <strong>Output: [-1]</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions, much clearer
var buildTree = function (preorder, inorder) {
  const inorderMap = {};
  let currPreorder = 0;

  inorder.forEach((el, idx) => {
    if (!(el in inorderMap)) {
      inorderMap[el] = idx;
    }
  });

  console.log(inorderMap);

  function dfs(left, right) {
    if (left > right) return null;

    // take currVal

    const currVal = preorder[currPreorder];
    currPreorder++;
    //   console.log(currVal, `indexOf ${preorder.indexOf(currVal)}, ${currPreorder}`)
    const node = new TreeNode(currVal);

    // find idx in inordermap and assign - 1 and + 1 for left and right node respectively
    node.left = dfs(left, inorderMap[currVal] - 1);
    node.right = dfs(inorderMap[currVal] + 1, right);

    return node;
  }

  return dfs(0, inorder.length - 1);
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
