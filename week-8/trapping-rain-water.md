# Trapping Rain Water

{% embed url="https://leetcode.com/problems/trapping-rain-water" %}

### Problem

> Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)
>
> <pre data-overflow="wrap"><code>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
> <strong>Output: 6
> </strong><strong>Explanation:
> </strong>The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: height = [4,2,0,3,2,5]
> <strong>Output: 9</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
var trap = function (height) {
  let landArea = 0;
  let maxFromLeft = 0;
  let maxAreaFromLeft = 0;

  for (let h of height) {
    landArea += h;
    maxFromLeft = Math.max(maxFromLeft, h);
    maxAreaFromLeft += maxFromLeft;
  }

  let maxFromRight = 0;
  let maxAreaFromRight = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    maxFromRight = Math.max(maxFromRight, height[i]);
    maxAreaFromRight += maxFromRight;
  }

  const boundingArea = height.length * maxFromLeft;
  const leftVoid = boundingArea - maxAreaFromLeft;
  const rightVoid = boundingArea - maxAreaFromRight;
  return boundingArea - leftVoid - rightVoid - landArea;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
