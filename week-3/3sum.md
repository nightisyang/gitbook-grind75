# 3Sum

{% embed url="https://leetcode.com/problems/3sum" %}

### Problem

> Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
>
> Notice that the solution set must not contain duplicate triplets.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [-1,0,1,2,-1,-4]
> <strong>Output: [[-1,-1,2],[-1,0,1]]
> </strong><strong>Explanation:
> </strong>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
> nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
> nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
> The distinct triplets are [-1,0,1] and [-1,-1,2].
> Notice that the order of the output and the order of the triplets does not matter.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [0,1,1]
> <strong>Output: []
> </strong><strong>Explanation: The only possible triplet does not sum up to 0.</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: nums = [0,0,0]
> <strong>Output: [[0,0,0]]
> </strong><strong>Explanation: The only possible triplet sums up to 0.</strong></code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
- i, j, k can't start at the same index, sort array to enable additional logic in code
- i = 0, j = i + 1 and k = arr.length - 1
- iterate thorugh array to i < length - 1
    - because arr is sorted, if arr[i] > 0, then return result
    - if sum of 3 index > 0 --> k--
    - if sum of 3 index < 0 --> j++
    - if sum of 3 index === 0
        - push [i, j, k] into output array
        - advance pointers but
            - ensure that new values of pointer are not equals to prev value
            - k-- or j++
```
{% endcode %}

### Solution

```javascript
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  const result = [];

  if (len === 3) {
    const sum = nums[0] + nums[1] + nums[2];
    if (sum === 0) {
      result.push([nums[0], nums[1], nums[2]]);
      return result;
    }
  }

  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > 0) {
      return result;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = len - 1; j < k; ) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

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
