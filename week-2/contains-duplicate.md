# Contains Duplicate

{% embed url="https://leetcode.com/problems/contains-duplicate" %}

### Problem

> Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [1,2,3,1]
> <strong>Output:
> </strong> true</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [1,2,3,4]
> <strong>Output: false</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: nums = [1,1,1,3,3,4,3,2,4,2]
> <strong>Output: true</strong></code></pre>

### Pseudocode

```
- use a set to identify unique numbers
 - if set.has(num)
  - return false
 - else add to set
```

### Solution

```javascript
var containsDuplicate = function (nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }

    map.set(nums[i], 0);
  }

  return false;
};
```

### Time and Space Complexity

#### Time

* Loop through array once, add number to set - O(N)
* Total - O(N)

#### Space

* Store number in a set - O(N)
* Total - O(N)
