# Clone Graph

{% embed url="https://leetcode.com/problems/clone-graph" %}

### Problem

> Given a reference of a node in a [**connected**](https://en.wikipedia.org/wiki/Connectivity\_\(graph\_theory\)#Connected\_graph) undirected graph.
>
> Return a [**deep copy**](https://en.wikipedia.org/wiki/Object\_copying#Deep\_copy) (clone) of the graph.
>
> Each node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.
>
> ```
> class Node {
>     public int val;
>     public List<Node> neighbors;
> }
> ```
>
> &#x20;
>
> **Test case format:**
>
> For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.
>
> **An adjacency list** is a collection of unordered **lists** used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
>
> The given node will always be the first node with `val = 1`. You must return the **copy of the given node** as a reference to the cloned graph.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2019/11/04/133\_clone\_graph\_question.png)
>
> <pre><code>Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
> <strong>Output: [[2,4],[1,3],[2,4],[1,3]]
> </strong><strong>Explanation:
> </strong>There are 4 nodes in the graph.
> 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
> 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
> 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
> 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).</code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/01/07/graph.png)
>
> <pre><code>Input: adjList = [[]]
> <strong>Output: [[]]
> </strong><strong>Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: adjList = []
> <strong>Output: []
> </strong><strong>Explanation: This an empty graph, it does not have any nodes.</strong></code></pre>

### Pseudocode

```
- to clone a connected undirected graph
  - need value of the node
  - array of the neighbouring nodes
  
- initialize a new node with node.val,
  - recurse through node.neighbor, and place that neighbor into array
  - use visited array, add to array if not visited,
    - if visited, just add to neighbor array without recursing (already been there) 
```

### Solution

```javascript
// from solutions
var cloneGraph = function (node) {
  const visited = new Array();

  if (node == null) {
    return node;
  }

  return cloneHelper(node, visited);
};

var cloneHelper = function (node, visited) {
  // console.log(visited, node.val)
  const newNode = new Node(node.val);

  visited[node.val] = newNode;

  for (const neighbor of node.neighbors) {
    if (!visited[neighbor.val]) {
      const newNeighbor = cloneHelper(neighbor, visited);
      newNode.neighbors.push(newNeighbor);
    } else {
      const newNeighbor = visited[neighbor.val];
      newNode.neighbors.push(newNeighbor);
    }
  }
  return newNode;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
