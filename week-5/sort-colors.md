# Sort Colors

{% embed url="https://leetcode.com/problems/sort-colors" %}

### Problem

> Given an array `nums` with `n` objects colored red, white, or blue, sort them [**in-place**](https://en.wikipedia.org/wiki/In-place\_algorithm) **** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
>
> We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.
>
> You must solve this problem without using the library's sort function.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [2,0,2,1,1,0]
> <strong>Output: [0,0,1,1,2,2]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [2,0,1]
> <strong>Output: [0,1,2]</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// 0 red
// 1 white
// 2 blue
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // i only serves to indicate end of j for loop
    // first j for loop when place largest value at the end, therefore i--
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
