# Valid Parentheses

{% embed url="https://leetcode.com/problems/valid-parentheses/" %}

### Problem

> Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
>
> An input string is valid if:
>
> 1. Open brackets must be closed by the same type of brackets.
> 2. Open brackets must be closed in the correct order.
> 3. Every close bracket has a corresponding open bracket of the same type.

> ### Pseudocode

{% code overflow="wrap" %}

```
usage of opening and closing parenthesis follows last in first out (LIFO), the last opening parenthesis must follow with the first corresponding closing parenthesis.

- create a map that has a [opening parenthesis, closing parenthesis], key-value pair
- create an empty array as a stack
- loop through the string
    - if character is an opening parenthesis
        - push corresponding closing parenthesis into stack
    - if character is a closing parenthesis
        - pop last element from stack and compare if it is the right pair
        - if it's not, return false immediately
- when the loop completes and
    - if the stack is empty, return true
    - else, return false
```

{% endcode %}

### Solution

```javascript
var isValid = function (s) {
  const closingTagsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  let len = s.length;
  if (len % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (closingTagsMap[s[i]]) {
      stack.push(s[i]);
    } else {
      if (s[i] !== closingTagsMap[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
```

### Time and Space Complexity

#### Time

- Loops through string once to find opening and closing parenthesis
- Lookup for corresponding parenthesis using Map is constant time
- Total - O(N)

#### Space

- Space complexity increases linearly with input i.e. stack length
- Total - O(N)
