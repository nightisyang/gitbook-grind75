# Binary Search

{% embed url="https://leetcode.com/problems/binary-search/" %}

### Problem

> Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.
>
> You must write an algorithm with `O(log n)` runtime complexity.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [-1,0,3,5,9,12], target = 9
> <strong>Output:
> </strong> 4
> <strong>Explanation:
> </strong> 9 exists in nums and its index is 4</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [-1,0,3,5,9,12], target = 2
> <strong>Output:
> </strong> -1
> <strong>Explanation:
> </strong> 2 does not exist in nums so return -1</code></pre>
>
> &#x20;
>
> **Constraints:**
>
> * `1 <= nums.length <= 104`
> * `-104 < nums[i], target < 104`
> * All the integers in `nums` are **unique**.
> * `nums` is sorted in ascending order.
>
>

### Pseudocode

{% code overflow="wrap" %}
```
running time of O(log N) doesn't scale linearly with input. vanilla binary search

- ensure that list is sorted
- select a lo and hi point
- in a while loop, calculate a mid point that changes in each interation
- 3 conditions to find a for a target
    - if mid-point === target, target found
    - if mid-point > target - value is on the left
        - reassign hi to mid - 1
    - if mid-point < target - value is on the right
        - reassign lo to mid + 1
```
{% endcode %}

### Solution

```javascript
// Some code
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      hi = mid - 1;
    }

    if (nums[mid] < target) {
      lo = mid + 1;
    }
  }

  return -1;
};


```

### Time and Space Complexity

#### Time

* binary search is O(log N)
* Total - O(log N)

#### Space

* Constant time operation to store lo, mid, hi values - O(1)
* Total - O(1)
