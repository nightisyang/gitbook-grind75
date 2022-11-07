# Min Stack

{% embed url="https://leetcode.com/problems/min-stack" %}

### Problem

> Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
>
> Implement the `MinStack` class:
>
> * `MinStack()` initializes the stack object.
> * `void push(int val)` pushes the element `val` onto the stack.
> * `void pop()` removes the element on the top of the stack.
> * `int top()` gets the top element of the stack.
> * `int getMin()` retrieves the minimum element in the stack.
>
> You must implement a solution with `O(1)` time complexity for each function.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
> [[],[-2],[0],[-3],[],[],[],[]]
> <strong>Output
> </strong>[null,null,null,null,-3,null,0,-2]
> <strong>Explanation
> </strong>MinStack minStack = new MinStack();
> minStack.push(-2);
> minStack.push(0);
> minStack.push(-3);
> minStack.getMin(); // return -3
> minStack.pop();
> minStack.top();    // return 0
> minStack.getMin(); // return -2</code></pre>

### Pseudocode

```
```

### Solution

```javascript
// https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.data = [];
  this.min = [];
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.length === 0) {
    this.data[0] = val;
    this.min[0] = val;
    this.length++;
  } else {
    this.data[this.length] = val;

    let currMin = this.min[this.length - 1];

    if (currMin > val) {
      this.min[this.length] = val;
    } else {
      this.min[this.length] = currMin;
    }

    this.length++;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // this.min[this.length - 1] = undefined
  // this.data[this.length - 1] = undefined
  this.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
