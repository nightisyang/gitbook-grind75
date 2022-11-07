# Insert Interval

{% embed url="https://leetcode.com/problems/insert-interval" %}

### Problem

> You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.
>
> Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).
>
> Return `intervals` _after the insertion_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
> <strong>Output: [[1,5],[6,9]]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
> <strong>Output: [[1,2],[3,10],[12,16]]
> </strong><strong>Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].</strong></code></pre>

### Pseudocode

```
- if intervals overlap, merge them with [Math.min, Math.max]
- push intervals with smaller max values than merge min into left array
- push intervals wither larger min values than merge max into right array
```

### Solution

```javascript
var insert = function (intervals, newInterval) {
  // this is the trick, to split array to lesser or more than merge newInterval, then reconstitute result at the end
  let merge = [[], []];
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    let currInterval = intervals[i];
    const [lo, hi] = intervals[i];

    if (hi < newInterval[0]) {
      merge[0].push(currInterval);
    } else if (newInterval[1] < lo) {
      merge[1].push(currInterval);
    } else {
      // reassign newInterval with lowest and highest value if intervals overlap
      newInterval = [
        Math.min(newInterval[0], lo),
        Math.max(newInterval[1], hi),
      ];
    }
  }

  result.push(...merge[0], newInterval, ...merge[1]);
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
