# Largest Rectangle in Histogram

{% embed url="https://leetcode.com/problems/largest-rectangle-in-histogram" %}

### Problem

> Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return _the area of the largest rectangle in the histogram_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)
>
> <pre><code>Input: heights = [2,1,5,6,2,3]
> <strong>Output: 10
> </strong><strong>Explanation:
> </strong>The above is a histogram where width of each bar is 1.
> The largest rectangle is shown in the red area, which has an area = 10 units.</code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)
>
> <pre><code>Input: heights = [2,4]
> <strong>Output: 4</strong></code></pre>

### Pseudocode

```
- to solve this question
     - need to breakdown the logic of generating largest area
     - easy to be off by one because of look back
     - think of it as, looking for local maxima, neighboring values must be smaller

- using a stack to find the highest histogram
     - push into stack
     - if current height is less than previous height
          - won't be able to generate the largest area
          - look back in the stack until a you find a higher historgram than current
          - calculate area and store Math.max()
```

### Solution

{% code overflow="wrap" %}
```javascript
// stack
// https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/425762/javascript-brute-force-and-stack-solutions/
// go through a loop till <= heights.length, including because required to look back
// assess maxArea if current height is less than stack height, keep popping until stack prev height is equal or more than current height
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [{ idx: 0, val: 0 }];

  const peek = () => stack[stack.length - 1] || null;

  for (let i = 0; i <= heights.length; i++) {
    const curHeight = heights[i];
    const push = () => stack.push({ idx: i + 1, val: curHeight });

    // console.log("currently traversing:", i);
    // if current height is more than previous stacked value, push
    if (curHeight && curHeight > peek().val) {
      push();
      // console.log(stack);
    } else {
      // if previous height in stack is more than current height, previous height is the top
      // pop it until stack's last value is less than current height
      // calculate maxArea from current index to peek().idx
      while (peek() && peek().val > (curHeight || 0)) {
        // console.log("pop");
        const top = stack.pop();
        const idx = peek() ? peek().idx : 0;
        maxArea = Math.max(maxArea, (i - idx) * top.val);
        // console.log(top, stack, idx, maxArea);
      }

      // once done, push curr height into stack and continue
      push();
    }
  }
  return maxArea;
};

```
{% endcode %}

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
