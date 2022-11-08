# Partition Equal Subset Sum

{% embed url="https://leetcode.com/problems/partition-equal-subset-sum" %}

### Problem

> Given a **non-empty** array `nums` containing **only positive integers**, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [1,5,11,5]
> <strong>Output: true
> </strong><strong>Explanation: The array can be partitioned as [1, 5, 5] and [11].</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [1,2,3,5]
> <strong>Output: false
> </strong><strong>Explanation: The array cannot be partitioned into equal sum subsets.</strong></code></pre>

### Pseudocode

```
- nested loops to find all posible combinations of sum
    - trick is to make a new copy of memo in each iteration
```

### Solution

```javascript
// from solution
// https://leetcode.com/problems/partition-equal-subset-sum/solutions/462699/whiteboard-editorial-all-approaches-explained/
var canPartition = (A) => {
  let totalSum = A.reduce((acc, curr) => acc + curr);
  if (totalSum % 2) return false;

  const target = totalSum / 2;
  const memo = new Set([0]);

  for (let number of A) {
    let possibleSums = Array.from(memo);
    console.log(possibleSums);

    for (let possibleSum of possibleSums) {
      console.log(number);
      memo.add(possibleSum + number);
    }
    console.log(memo);
  }
  return memo.has(target);
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
