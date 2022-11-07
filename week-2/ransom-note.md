# Ransom Note

{% embed url="https://leetcode.com/problems/ransom-note" %}

### Problem

> Given two strings `ransomNote` and `magazine`, return `true` _if_ `ransomNote` _can be constructed by using the letters from_ `magazine` _and_ `false` _otherwise_.
>
> Each letter in `magazine` can only be used once in `ransomNote`.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: ransomNote = "a", magazine = "b"
> <strong>Output: false</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: ransomNote = "aa", magazine = "ab"
> <strong>Output: false</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: ransomNote = "aa", magazine = "aab"
> <strong>Output: true</strong></code></pre>
>
>

### Pseudocode

{% code overflow="wrap" %}
```
create a collection of letters and their sum {letters : sum} of magazine with a map
loop over ransomNote and deducut -1 from map for each letter
if !map[letter] or if map[letter] < 0, then there there isn't enough letters for the ransome note 
```
{% endcode %}

### Solution

```javascript
var canConstruct = function (ransomNote, magazine) {
  const ransomArr = ransomNote.split("");
  const magazineArr = magazine.split("");
  let ransomObj = {};
  let result = true;

  for (let i = 0; i < magazineArr.length; i++) {
    const letter = magazineArr[i];

    if (!ransomObj[letter]) {
      ransomObj[letter] = 1;
      continue;
    }

    ransomObj[letter] += 1;
  }

  for (let i = 0; i < ransomArr.length; i++) {
    const letter = ransomArr[i];

    if (!ransomObj[letter]) {
      result = false;
      break;
    }

    if (ransomObj[letter] > 0) {
      ransomObj[letter] -= 1;
    }
  }
  return result;
};

```

### Time and Space Complexity

#### Time

* Two loops are performed, one to create the map, the other to find matching letters for the ransom note. Both are performed independently - O(N)
* Total - O(N)

#### Space

* Map created to store letters and count, space requirements increases with input size - O(N)
* Total - O(N)
