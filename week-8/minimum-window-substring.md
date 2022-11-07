# Minimum Window Substring

{% embed url="https://leetcode.com/problems/minimum-window-substring" %}

### Problem

> Given two strings `s` and `t` of lengths `m` and `n` respectively, return _the **minimum window**_ _**substring** of_ `s` _such that every character in_ `t` _(**including duplicates**) is included in the window_. If there is no such substring, return _the empty string_ `""`.
>
> The testcases will be generated such that the answer is **unique**.
>
> &#x20;
>
> **Example 1:**
>
> <pre data-overflow="wrap"><code>Input: s = "ADOBECODEBANC", t = "ABC"
> <strong>Output: "BANC"
> </strong><strong>Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "a", t = "a"
> <strong>Output: "a"
> </strong><strong>Explanation: The entire string s is the minimum window.</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: s = "a", t = "aa"
> <strong>Output: ""
> </strong><strong>Explanation:
> </strong>Both 'a's from t must be included in the window.
> Since the largest window of s only has one 'a', return empty string.</code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/minimum-window-substring/solutions/26808/here-is-a-10-line-template-that-can-solve-most-substring-problems/
var minWindow = function (s, t) {
  let counter = t.length;
  let shortestSubstring = "";
  const tMap = {};
  let start = 0;
  let end = 0;
  let minStart = 0;
  let minLen = Infinity;
  let size = s.length;

  for (let i = 0; i < t.length; i++) {
    if (!tMap[t[i]]) {
      tMap[t[i]] = 0;
    }
    tMap[t[i]] += 1;
  }

  while (end < size) {
    if (tMap[s[end]] > 0) {
      counter--;
    }

    tMap[s[end]]--;
    end++;
    console.log(tMap);
    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      tMap[s[start]]++;
      console.log(tMap);
      if (tMap[s[start]] > 0) {
        counter++;
      }
      start++;
    }
  }
  console.log(tMap);
  if (minLen !== Infinity) {
    shortestSubstring = s.substring(minStart, minStart + minLen);
  }

  return shortestSubstring;
};
```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
