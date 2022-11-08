# Subsets

{% embed url="https://leetcode.com/problems/subsets" %}

### Problem

> Given an integer array `nums` of **unique** elements, return _all possible_ _subsets_ _(the power set)_.
>
> The solution set **must not** contain duplicate subsets. Return the solution in **any order**.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [1,2,3]
> <strong>Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [0]
> <strong>Output: [[],[0]]</strong></code></pre>

### Pseudocode

```
- don't understand question
```

### Solution

```javascript
// from solutions
let result;
var subsets = function (nums) {
  result = []; // no need this if function is executed once
  recursive(0, nums, []);
  return result;
};

var recursive = function (start, nums, subset) {
  //   console.log(subset)
  result.push(subset.slice(0));

  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]);
    // console.log(subset)
    recursive(i + 1, nums, subset);
    subset.pop();
    // console.log(subset)
  }
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
