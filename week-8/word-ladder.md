# Word Ladder

{% embed url="https://leetcode.com/problems/word-ladder" %}

### Problem

> A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:
>
> * Every adjacent pair of words differs by a single letter.
> * Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
> * `sk == endWord`
>
> Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return _the **number of words** in the **shortest transformation sequence** from_ `beginWord` _to_ `endWord`_, or_ `0` _if no such sequence exists._
>
> &#x20;
>
> **Example 1:**
>
> <pre data-overflow="wrap"><code>Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
> <strong>Output: 5
> </strong><strong>Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.</strong></code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
> <strong>Output: 0
> </strong><strong>Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
// No idea how this works lol
var ladderLength = function (begin, end, wordList) {
  let set = new Set();
  for (let val of wordList) {
    if (val !== begin) set.add(val);
  }
  if (!set.has(end)) return 0;
  let depth = 0;
  let queue = [begin];
  let size = queue.length;
  let a = "a".charCodeAt(0);
  while (queue.length > 0) {
    depth++;
    while (size > 0) {
      let str = queue.shift();
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 26; j++) {
          let search =
            str.slice(0, i) + String.fromCharCode(a + j) + str.slice(i + 1);
          if (search === str) continue;
          if (search === end) return depth + 1;
          if (set.has(search)) {
            queue.push(search);
            set.delete(search);
          }
        }
      }
      size--;
    }
    size = queue.length;
  }

  return 0;
};
//hit

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
