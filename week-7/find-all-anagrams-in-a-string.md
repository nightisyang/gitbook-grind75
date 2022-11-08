# Find All Anagrams in a String

{% embed url="https://leetcode.com/problems/find-all-anagrams-in-a-string" %}

### Problem

> Given two strings `s` and `p`, return _an array of all the start indices of_ `p`_'s anagrams in_ `s`. You may return the answer in **any order**.
>
> An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "cbaebabacd", p = "abc"
> <strong>Output: [0,6]
> </strong><strong>Explanation:
> </strong>The substring with start index = 0 is "cba", which is an anagram of "abc".
> The substring with start index = 6 is "bac", which is an anagram of "abc".</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "abab", p = "ab"
> <strong>Output: [0,1,2]
> </strong><strong>Explanation:
> </strong>The substring with start index = 0 is "ab", which is an anagram of "ab".
> The substring with start index = 1 is "ba", which is an anagram of "ab".
> The substring with start index = 2 is "ab", which is an anagram of "ab".</code></pre>

### Pseudocode

```
- don't understand how solution was formed
- why uniqueChar?
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/592384/sliding-window-explanation-javascript-solution-w-comments-faster-than-100/

// previous naive approach had TC O(s^2)
// dumbing down logic to find uniqueChars then following up with starting index, simplified the looping operation.
var findAnagrams = function (s, p) {
  const freqMap = {};
  let result = [];
  let uniqueChar = 0;
  let i = 0;
  let j = 0;

  for (let i = 0; i < p.length; i++) {
    if (!freqMap[p[i]]) {
      freqMap[p[i]] = 0;
      uniqueChar++;
    }

    freqMap[p[i]]++;
  }

  while (j < s.length) {
    // console.log('out', i, j)
    let char = s[j];

    if (freqMap[char] !== undefined) {
      freqMap[char] -= 1;

      if (freqMap[char] === 0) {
        // all occurance of unique letters is found until this end (j)
        uniqueChar--;
      }
    }

    j++;

    while (uniqueChar === 0) {
      // console.log('in', i, j)
      let temp = s[i];

      if (freqMap[temp] !== undefined) {
        // yep, we've found the char, re-instate it for the next find
        freqMap[temp] += 1;

        if (freqMap[temp] > 0) {
          uniqueChar++;
        }
      }

      if (j - i === p.length) {
        result.push(i);
      }

      i++;
    }
  }

  return result;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
