# Letter Combinations of a Phone Number

{% embed url="https://leetcode.com/problems/letter-combinations-of-a-phone-number" %}

### Problem

> Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.
>
> A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
>
> ![](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: digits = "23"
> <strong>Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: digits = ""
> <strong>Output: []</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: digits = "2"
> <strong>Output: ["a","b","c"]</strong></code></pre>

### Pseudocode

```
- combination, backpedelling
- dfs, pre-push, recurse, post-pop
```

### Solution

```javascript
// from solution page, clean code dfs
var letterCombinations = function (digits, res = [], level = 0, combo = []) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // base condition
  if (!digits) {
    return [];
  }

  // base condition
  if (digits.length === level) {
    res.push(combo.join(""));
    return;
  }

  // digits is str, is iterable with level/index "23" - starts with "2" level = 0
  for (const c of map[digits[level]]) {
    // pre
    combo.push(c);
    // recurse
    letterCombinations(digits, res, level + 1, combo);
    // post
    combo.pop();
  }

  return res;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
