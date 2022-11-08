# Course Schedule

{% embed url="https://leetcode.com/problems/course-schedule" %}

### Problem

> There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.
>
> * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
>
> Return `true` if you can finish all courses. Otherwise, return `false`.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: numCourses = 2, prerequisites = [[1,0]]
> <strong>Output: true
> </strong><strong>Explanation: There are a total of 2 courses to take. 
> </strong>To take course 1 you should have finished course 0. So it is possible.</code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
> <strong>Output: false
> </strong><strong>Explanation: There are a total of 2 courses to take. 
> </strong>To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.</code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
- find if course requirements for this specific course, also requires this course to be completed beforehand. i.e. find if a loop is present, a graph problem

- first, construct an adjacency list for each course.
    - [k, v] => [course, [course prereqs]]
- traverse graph from each vertex in a for loop, using dfs
    - use visited set to prevent looping through previous links
    - use visiting to prevent infinite loop
```
{% endcode %}

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/course-schedule/solutions/236109/keep-it-simple-dfs/
// it's a graph problem, essentially looking if the graph is cyclical
// if it is, it's not possible to complete all the courses
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const visiting = new Set();
  const visited = new Set();

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (const [v, e] of graph) {
    if (dfs(v, graph, visited, visiting)) {
      return false;
    }
  }

  return true;
};

function dfs(v, graph, visited, visiting) {
  visiting.add(v);

  let edges = graph.get(v);

  if (edges) {
    for (const edge of edges) {
      if (visited.has(edge)) {
        continue;
      }

      // if this is true, it's cyclical
      if (visiting.has(edge)) {
        return true;
      }

      // if other edges are also a prereq for this edge
      if (dfs(edge, graph, visited, visiting)) {
        return true;
      }
    }
  }

  visiting.delete(v);
  visited.add(v);
  return false;
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
