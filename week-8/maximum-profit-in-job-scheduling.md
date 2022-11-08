# Maximum Profit in Job Scheduling

{% embed url="https://leetcode.com/problems/maximum-profit-in-job-scheduling" %}

### Problem

> We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of `profit[i]`.
>
> You're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
>
> If you choose a job that ends at time `X` you will be able to start another job that starts at time `X`.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2019/10/10/sample1\_1584.png)
>
> <pre><code>Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
> <strong>Output: 120
> </strong><strong>Explanation: The subset chosen is the first and fourth job. 
> </strong>Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.</code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2019/10/10/sample22\_1584.png)
>
> <pre><code>Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
> <strong>Output: 150
> </strong><strong>Explanation:
> </strong>The subset chosen is the first, fourth and fifth job. 
> Profit obtained 150 = 20 + 70 + 60.</code></pre>
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2019/10/10/sample3\_1584.png)
>
> <pre><code>Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
> <strong>Output: 6</strong></code></pre>

### Pseudocode

```
- initial attemp to solve via graph 
    - one tasks are connected to others
- optimal solution is combination of dfs and binary search
```

### Solution

```javascript
// from solution
// top down DP with memo
// https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/733167/thinking-process-top-down-dp-bottom-up-dp/
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = new Array(startTime.length);
  const dp = new Map();

  // make a new array containing start, time and profit
  for (let i = 0; i < jobs.length; i++) {
    jobs[i] = [startTime[i], endTime[i], profit[i]];
  }

  // sort according to start time
  jobs.sort((a, b) => a[0] - b[0]);

  return dfs(0, jobs, dp);
};

function dfs(idx, jobs, dp) {
  // base condition
  if (idx === jobs.length) {
    return 0;
  }

  if (dp.has(idx)) {
    return dp.get(idx);
  }

  // pre
  // given this particular job idx, find the next idx that has a non-overlapping start time
  let next = binarySearch(idx, jobs);

  // recurse
  let inclProfit = jobs[idx][2] + (next === -1 ? 0 : dfs(next, jobs, dp));
  let exclProfit = dfs(idx + 1, jobs, dp);

  // post
  dp.set(idx, Math.max(inclProfit, exclProfit));
  return Math.max(inclProfit, exclProfit);
}

function binarySearch(idx, jobs) {
  let lo = idx + 1;
  let hi = jobs.length - 1;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    // returns the next job by comparing, mid start time to idx end time
    if (jobs[mid][0] >= jobs[idx][1]) {
      // if start time of prev is also equals or more than idx end time, continue seraching
      if (jobs[mid - 1][0] >= jobs[idx][1]) {
        hi = mid - 1;

        // if prev job start time is less than idx end time, return
      } else {
        return mid;
      }
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
