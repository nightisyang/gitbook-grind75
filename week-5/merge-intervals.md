# Merge Intervals

{% embed url="https://leetcode.com/problems/merge-intervals" %}

### Problem

> Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
> <strong>Output: [[1,6],[8,10],[15,18]]
> </strong><strong>Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: intervals = [[1,4],[4,5]]
> <strong>Output: [[1,5]]
> </strong><strong>Explanation: Intervals [1,4] and [4,5] are considered overlapping.</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
function merge(intervals) {
  if (!intervals.length) {
    return intervals;
  }

  // if start interval isn't the same, sort using the start interval, otherwise sort using end interval
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  //   console.log(intervals)

  var prev = intervals[0];
  var res = [prev];

  for (var curr of intervals) {
    // if start of current interval is smaller than previous end
    if (curr[0] <= prev[1]) {
      // merge to the largest end interval either previous or current
      prev[1] = Math.max(prev[1], curr[1]);

      // else push and reassign prev and curr
    } else {
      res.push(curr);
      prev = curr;
    }
  }

  return res;
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
