# Lowest Common Ancestor of a Binary Search Tree

{% embed url="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree" %}

### Problem

> Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
>
> According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest\_common\_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree\_improved.png)
>
> <pre data-overflow="wrap"><code>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
> <strong>Output: 6
> </strong><strong>Explanation: The LCA of nodes 2 and 8 is 6.</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree\_improved.png)
>
> <pre data-overflow="wrap"><code>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
> <strong>Output: 2
> </strong><strong>Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: root = [2,1], p = 2, q = 1
> <strong>Output: 2</strong></code></pre>

### Pseudocode

```
use unique property of BST 
    - values on the left is always smaller than parent node
    - values on the right is always larger than parent node
two types of expected results
    - return parent node, with both values are child
    - return node that is equals to p or q, and either p or q as a child

traverse BST using dfs
    - if p & q are both larger than current node value - recurse over right node
    - if q & q are both smaller than current node value - recurse over left node
    - return node

```

### Solution

```javascript
var lowestCommonAncestor = function (root, p, q) {
  function walk(node, p, q) {
    if (!node) {
      return null;
    }

    // pre
    // recurse

    // values are on the right
    if (p.val > node.val && q.val > node.val) {
      return walk(node.right, p, q);
    }

    // values are on the right
    if (p.val < node.val && q.val < node.val) {
      return walk(node.left, p, q);
    }

    // post
    // values are on both right and left, i.e this is the common ancestor
    return node;
  }

  return walk(root, p, q);
};

// naive approach without utilizing properties of a BST
var lowestCommonAncestor = function(root, p, q) {

    let commonAncestor = root

    function findingPQ (node, p, q) {

        if(!node) {
            return
        }

        // pre
        if(node.val === p.val) {
            let leftFindOther = findOther(node.left, q.val) ? true : false
            let rightFindOther = findOther(node.right, q.val) ? true : false

            if (leftFindOther || rightFindOther) {
                commonAncestor = node
                foundBoth = true
                return
            } else {
                return true
            }
        }

        if(node.val === q.val) {
            let leftFindOther = findOther(node.left, p.val) ? true : false
            let rightFindOther = findOther(node.right, p.val) ? true : false

            if (leftFindOther || rightFindOther) {
                commonAncestor = node
                foundBoth = true
                return
            } else {
                return true
            }
        }


        // recurse
        let findOneLeft = findingPQ(node.left, p, q) ? true : false;
        let findOneRight = findingPQ(node.right, p, q) ? true : false;

        // post
        if(findOneLeft && findOneRight) {
            commonAncestor = node
            foundBoth = true
        }

        if(findOneLeft) {
            return true
        }

        if(findOneRight) {
            return true
        }

        return false
    
    }

    function findOther(node, x) {
        if(!node) {
            return
        }

        // pre
        if(node.val === x) {
            return true
        }

        // recurse
        let findLeft = findOther(node.left, x) ? true : false
        let findRight = findOther(node.right, x) ? true : false

        // post
        if(findLeft || findRight) {
            return true
        } 
        
        return false
    }

    findingPQ(root, p, q)
    return commonAncestor
};


```

### Time and Space Complexity

#### Time

* Finding values in a binary search tree is dependent on tree height O(height)
* Total - O(h)

#### Space

* space required by recursive function for finding a value in BST is also O(h) - it doesn't scale linearly with input size
* Total - O(h)
