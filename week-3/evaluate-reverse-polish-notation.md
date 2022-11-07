# Evaluate Reverse Polish Notation

{% embed url="https://leetcode.com/problems/evaluate-reverse-polish-notation" %}

### Problem

> Evaluate the value of an arithmetic expression in [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse\_Polish\_notation).
>
> Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression.
>
> **Note** that division between two integers should truncate toward zero.
>
> It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: tokens = ["2","1","+","3","*"]
> <strong>Output: 9
> </strong><strong>Explanation: ((2 + 1) * 3) = 9</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: tokens = ["4","13","5","/","+"]
> <strong>Output: 6
> </strong><strong>Explanation: (4 + (13 / 5)) = 6</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
> <strong>Output: 22
> </strong><strong>Explanation:
> </strong> ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
> = ((10 * (6 / (12 * -11))) + 17) + 5
> = ((10 * (6 / -132)) + 17) + 5
> = ((10 * 0) + 17) + 5
> = (0 + 17) + 5
> = 17 + 5
> = 22</code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/486566/javascript-stack-solution/
// using stack to parse out numbers, when an operand is encountered, pop off two values from the stack and execute the function assigned in the object
// after performing the operation, the value is pushed back into the stack and repeated until the loop ends
function evalRPN(tokens) {
  const stack = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };

  for (const el of tokens) {
    if (ops[el]) {
      const secondVal = stack.pop();
      const firstVal = stack.pop();
      const operation = ops[el](firstVal, secondVal);
      stack.push(operation);
    } else {
      stack.push(Number(el));
    }
  }

  return stack.pop();
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
