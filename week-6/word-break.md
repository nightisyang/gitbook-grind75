# Word Break

{% embed url="https://leetcode.com/problems/word-break" %}

### Problem

> Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.
>
> **Note** that the same word in the dictionary may be reused multiple times in the segmentation.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "leetcode", wordDict = ["leet","code"]
> <strong>Output: true
> </strong><strong>Explanation: Return true because "leetcode" can be segmented as "leet code".</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "applepenapple", wordDict = ["apple","pen"]
> <strong>Output: true
> </strong><strong>Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
> </strong>Note that you are allowed to reuse a dictionary word.</code></pre>
>
> **Example 3:**
>
> <pre><code>Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
> <strong>Output: false</strong></code></pre>
>
>

### Pseudocode

```
```

### Solution

{% code overflow="wrap" %}
```javascript
// from solutions
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const starts = new Set([0]);

  for (const start of starts) {
    for (const word of words) {
      const end = start + word.length;
      // we are slicing the word from s and check if that sliced word is exist in wordDict
      // it could be the current word or it could be the other word which has same length of current word
      // either way, we admit that the current starting index to the index of word length exist
      // so now we want to add the next starting index which is 'end'
      // we repeat this process until the last index of s
      // if we reached to last index of s, that means that we checked that every sliced word exist in wordDict
      // until the last index of s
      // this will conclude that the s has every word from wordDict
      if (words.has(s.slice(start, end))) starts.add(end);
    }
  }
  return starts.has(s.length);
};

// what if we add the same length of index again and again?
// it will repeat the same starting index next time again and again.
// To prevent the repetition, we used a Set() so that even after we add the new start index
// it will not loop again unless if we never been to that starting index

```
{% endcode %}

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
