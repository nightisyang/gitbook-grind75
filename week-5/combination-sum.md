# Combination Sum

{% embed url="https://leetcode.com/problems/combination-sum" %}

### Problem

> Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`_._ You may return the combinations in **any order**.
>
> The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
>
> The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: candidates = [2,3,6,7], target = 7
> <strong>Output: [[2,2,3],[7]]
> </strong><strong>Explanation:
> </strong>2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
> 7 is a candidate, and 7 = 7.
> These are the only two combinations.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: candidates = [2,3,5], target = 8
> <strong>Output: [[2,2,2,2],[2,3,3],[3,5]]</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: candidates = [2], target = 1
> <strong>Output: []</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/combination-sum/solutions/16757/javascript-solution-with-backtracking/
var combinationSum = function (candidates, target) {
  const buffer = [];
  const result = [];

  function walk(idx, target) {
    // console.log(buffer)
    // base condition
    if (target === 0) {
      // console.log('found combination')
      // if recursion results in target === 0, then take this combination and push into result
      return result.push(buffer.slice());
    }

    if (target < 0) {
      // console.log('target < 0')
      return;
    }

    if (idx === candidates.length) {
      // console.log('end of arr length')
      return;
    }
    // pre
    // start recursion with this number, if resulting target === 0, then buffer --> result
    buffer.push(candidates[idx]);
    // recurse

    // start recursion with this idx (itself), with after deducting target, find other combinations
    walk(idx, target - candidates[idx]);

    // if code reaches here, then combination < 0 or end of arr, pop it out from buffer and...
    buffer.pop();

    // start searching in the next idx
    walk(idx + 1, target);
    // post
  }

  walk(0, target);

  return result;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
