# Maximum Subarray

{% embed url="https://leetcode.com/problems/maximum-subarray" %}

### Problem

> Given an integer array `nums`, find the subarray which has the largest sum and return _its sum_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
> <strong>Output: 6
> </strong><strong>Explanation: [4,-1,2,1] has the largest sum = 6.</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [1]
> <strong>Output: 1</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: nums = [5,4,-1,7,8]
> <strong>Output: 23</strong></code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
- add up numbers in sequence
 - if previous + current number < previous, retain previous.
 - then compare Math.max(previous, maxSum)
```
{% endcode %}

### Solution

```javascript
var maxSubArray = function(nums) {
    let max = - Infinity
    let prev = 0

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        prev = Math.max(curr, curr + prev)
        max = Math.max(prev, max);
    }

    return max
};
```

### Time and Space Complexity

#### Time

* Iterate thorugh nums array - O(N)
* Total - O(N)

#### Space

* Storing summation values, previous and maximum - O(1)
* Total - O(1)
