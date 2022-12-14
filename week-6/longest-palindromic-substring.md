# Longest Palindromic Substring

{% embed url="https://leetcode.com/problems/longest-palindromic-substring" %}

### Problem

> Given a string `s`, return _the longest_ _palindromic_ _substring_ in `s`.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "babad"
> <strong>Output: "bab"
> </strong><strong>Explanation: "aba" is also a valid answer.</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "cbbd"
> <strong>Output: "bb"</strong></code></pre>

### Pseudocode

```
- use a function that is able to extend outwards to compare chars
    - in a for loop, use function to cover both odd and even cases
    - e.g. for loop travels to middle of string and finds two palindrome char
        - function extends outwards to assess how long this palindrome is
        - store start and end position of longest palindrome
    - return substring with starting and ending index
```

### Solution

```javascript
// from solution - does the same thing
var longestPalindrome = function (s) {
  const len = s.length;

  let start = 0;

  let end = 0;

  function extendPalindrome(str, e) {
    while (str >= 0 && e < len && s[str] === s[e]) {
      if (e - str > end - start) [start, end] = [str, e];
      str--;

      e++;
    }
  }

  for (let i = 0; i < len; i++) {
    extendPalindrome(i, i); // for odd length
    extendPalindrome(i, i + 1); // for even length
  }

  return s.slice(start, end + 1);
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
