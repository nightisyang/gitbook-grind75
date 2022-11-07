# Basic Calculator

{% embed url="https://leetcode.com/problems/basic-calculator" %}

### Problem

> Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return _the result of the evaluation_.
>
> **Note:** You are **not** allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "1 + 1"
> <strong>Output: 2</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = " 2-1 + 2 "
> <strong>Output: 3</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: s = "(1+(4+5+2)-3)+(6+8)"
> <strong>Output: 23</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions - python implementation
// https://leetcode.com/problems/basic-calculator/solutions/1456850/python-basic-calculator-i-ii-iii-easy-solution-detailed-explanation/
var calculate = function (s) {
  let it = 0;
  let num = 0;
  let stack = [];
  let sign = "+";

  function update(op, v) {
    console.log("update:", op, v);
    if (op == "+") {
      stack.push(v);
    } else if (op == "-") {
      stack.push(-v);
    } else if (op == "*") {
      stack.push(stack.pop() * v);
    } else if (op == "/") {
      stack.push(parseInt(stack.pop() / v));
    }
    console.log(stack);
  }

  while (it < s.length) {
    console.log(stack);
    let char = s[it];

    if (/\d/.test(char)) {
      num = num * 10 + parseInt(char);
    } else if (char === "+" || char === "-" || char === "*" || char === "/") {
      update(sign, num);
      num = 0;
      sign = char;
    } else if (char === "(") {
      const [val, idx] = calculate(s.slice(it + 1));
      console.log("open parenthesis,", s.slice(it + 1), val, idx);
      let j = idx;
      num = val;
      it = it + j;
    } else if (char === ")") {
      update(sign, num);
      return [stack.reduce((prev, cur) => prev + cur), it + 1];
    }

    it += 1;
  }

  update(sign, num);
  console.log(
    stack,
    "sum :",
    stack.reduce((prev, cur) => prev + cur)
  );
  return stack.reduce((prev, cur) => prev + cur);
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
