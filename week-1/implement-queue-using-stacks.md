# Implement Queue using Stacks

{% embed url="https://leetcode.com/problems/implement-queue-using-stacks" %}

### Problem

> {% code overflow="wrap" %}
> ```
> Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
>
> Implement the MyQueue class:
>
> void push(int x) Pushes element x to the back of the queue.
> int pop() Removes the element from the front of the queue and returns it.
> int peek() Returns the element at the front of the queue.
> boolean empty() Returns true if the queue is empty, false otherwise.
> Notes:
>
> You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
> Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
>  
>
> Example 1:
>
> Input
> ["MyQueue", "push", "push", "peek", "pop", "empty"]
> [[], [1], [2], [], [], []]
> Output : [null, null, null, 1, 1, false]
>
> Explanation
> MyQueue myQueue = new MyQueue();
> myQueue.push(1); // queue is: [1]
> myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
> myQueue.peek(); // return 1
> myQueue.pop(); // return 1, queue is [2]
> myQueue.empty(); // return false
> ```
> {% endcode %}
>
>

### Pseudocode

{% code overflow="wrap" %}
```
a stack is last in first out (LIFO) while a queue is first in first out (FIFO)
- behavior of a stack,
    - can only use push() and pop(), append last element
- implement a function that obtains the first element pushed i.e. shift() in JS, using two stacks while only using pop() and push()
- two stacks are provided
    - divide the two stacks into 
        - input stack, where all the values are pushed into
        - output stack, where the top most stack is the first value pushed
            - when the first is requested
            - pop() input stack and push() into output stack, until output in empty
            - the topmost value in output stack is the first value pushed in
            - to maintain ordering, pop everything out of output stack into intput

```
{% endcode %}

### Solution

```javascript
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  var pop = this.stack2.pop();

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return pop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  var pop = this.stack2.pop();
  this.stack2.push(pop);
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return pop;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 ? true : false;
};

```

### Time and Space Complexity

#### Time

* pushing and popping elements out on an array is constant time operation O(1)
* retrieval of element from FIFO requires the stack to be pop and pushed for the entire array length O(N)
* Total - O(N)

#### Space

* Memory required to store elements pushed in is O(N)
* Total - O(N)
