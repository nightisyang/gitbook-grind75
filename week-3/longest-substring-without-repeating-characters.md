# Longest Substring Without Repeating Characters

{% embed url="https://leetcode.com/problems/longest-substring-without-repeating-characters" %}

### Problem

> Given a string `s`, find the length of the **longest** **substring** without repeating characters.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "abcabcbb"
> <strong>Output: 3
> </strong><strong>Explanation: The answer is "abc", with the length of 3.</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "bbbbb"
> <strong>Output: 1
> </strong><strong>Explanation: The answer is "b", with the length of 1.</strong></code></pre>
>
> **Example 3:**
>
> <pre data-overflow="wrap"><code>Input: s = "pwwkew"
> <strong>Output: 3
> </strong><strong>Explanation: The answer is "wke", with the length of 3.
> </strong>Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</code></pre>

### Pseudocode

```
```

### Solution

```javascript
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let set = new Set();
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    while (set.has(curr)) {
      set.delete(s[left]);
      left++;
    }

    set.add(curr);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
