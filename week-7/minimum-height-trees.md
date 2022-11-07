# Minimum Height Trees

{% embed url="https://leetcode.com/problems/minimum-height-trees" %}

### Problem

> A tree is an undirected graph in which any two vertices are connected by _exactly_ one path. In other words, any connected graph without simple cycles is a tree.
>
> Given a tree of `n` nodes labelled from `0` to `n - 1`, and an array of `n - 1` `edges` where `edges[i] = [ai, bi]` indicates that there is an undirected edge between the two nodes `ai` and `bi` in the tree, you can choose any node of the tree as the root. When you select a node `x` as the root, the result tree has height `h`. Among all possible rooted trees, those with minimum height (i.e. `min(h)`)  are called **minimum height trees** (MHTs).
>
> Return _a list of all **MHTs'** root labels_. You can return the answer in **any order**.
>
> The **height** of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/09/01/e1.jpg)
>
> <pre data-overflow="wrap"><code>Input: n = 4, edges = [[1,0],[1,2],[1,3]]
> <strong>Output: [1]
> </strong><strong>Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/09/01/e2.jpg)
>
> <pre><code>Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
> <strong>Output: [3,4]</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/minimum-height-trees/solutions/427802/javascript-bfs-solution/
var findMinHeightTrees = function (n, edges) {
  if (!edges || n < 2) return [0];
  let graph = [];
  // parse edges
  for (let [x, y] of edges) {
    graph[x] = graph[x] || [];
    graph[y] = graph[y] || [];
    graph[x].push(y);
    graph[y].push(x);
  }
  let leaves = [];
  // init leaf nodes
  graph.map((pts, i) => pts.length === 1 && leaves.push(i));
  while (n > 2) {
    n = n - leaves.length;
    let nxt_leaves = [];
    for (let leave of leaves) {
      // remove leaf node and itself in related nodes
      tmp = graph[leave].pop();
      graph[tmp].splice(graph[tmp].indexOf(leave), 1);
      // save new leaf node
      graph[tmp].length === 1 && nxt_leaves.push(tmp);
    }
    leaves = nxt_leaves;
  }
  return leaves;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
