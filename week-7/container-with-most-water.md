# Container With Most Water

{% embed url="https://leetcode.com/problems/container-with-most-water" %}

### Problem

> You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.
>
> Find two lines that together with the x-axis form a container, such that the container contains the most water.
>
> Return _the maximum amount of water a container can store_.
>
> **Notice** that you may not slant the container.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question\_11.jpg)
>
> <pre data-overflow="wrap"><code>Input: height = [1,8,6,2,5,4,8,3,7]
> <strong>Output: 49
> </strong><strong>Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: height = [1,1]
> <strong>Output: 1</strong></code></pre>

### Pseudocode

```
- two pointers, starting at both ends, find largest rectangle
- move the poitner with the lowest height to find another that is taller
```

### Solution

```javascript
var maxArea = function (height) {
  let output = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;

    // choose the max, either from output of product of min height * width
    output = Math.max(output, Math.min(height[left], height[right]) * width);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  // console.log(output)
  return output;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
