# Search in Rotated Sorted Array

{% embed url="https://leetcode.com/problems/search-in-rotated-sorted-array" %}

### Problem

> There is an integer array `nums` sorted in ascending order (with **distinct** values).
>
> Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.
>
> Given the array `nums` **after** the possible rotation and an integer `target`, return _the index of_ `target` _if it is in_ `nums`_, or_ `-1` _if it is not in_ `nums`.
>
> You must write an algorithm with `O(log n)` runtime complexity.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0
> <strong>Output: 4</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 3
> <strong>Output: -1</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: nums = [1], target = 0
> <strong>Output: -1</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
//https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/273622/javascript-simple-o-log-n-binary-search-solution/
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }

  return -1;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
