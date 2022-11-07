# Product of Array Except Self

{% embed url="https://leetcode.com/problems/product-of-array-except-self" %}

### Problem

> Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.
>
> The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
>
> You must write an algorithm that runs in `O(n)` time and without using the division operation.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: nums = [1,2,3,4]
> <strong>Output: [24,12,8,6]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: nums = [-1,1,0,-3,3]
> <strong>Output: [0,0,9,0,0]</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions page mindblown
const productExceptSelf = function (nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;

  // reassigns previous product multiplication, doesn't include itself
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
    // console.log(output[i], rightMult, nums[i])
  }

  // left side multiplication required to circle back
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
    // console.log(output[j], leftMult, nums[j])
  }
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
