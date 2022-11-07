# Majority Element

{% embed url="https://leetcode.com/problems/majority-element" %}

### Problem

> Given an array `nums` of size `n`, return _the majority element_.
>
> The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [3,2,3]
> <strong>Output: 3</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [2,2,1,1,1,2,2]
> <strong>Output: 2</strong></code></pre>
>
>

### Pseudocode

{% code overflow="wrap" %}
```
make a map of unique numbers and the number of occurances, return majority element immediately if > n / 2 is found
```
{% endcode %}

### Solution

```javascript
var majorityElement = function (nums) {
  const len = nums.length;
  const map = {};

  for (let i = 0; i < len; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;

    if (map[nums[i]] > len / 2) {
      return nums[i];
    }
  }
};

```

### Time and Space Complexity

#### Time

* Loop through array once to find unique numbers and their counts - O(N)
* Total - O(N)

#### Space

* Storing a map of unique numbers and their counts - O(N)
* Total - O(N)
