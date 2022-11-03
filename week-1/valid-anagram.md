# Valid Anagram

{% embed url="https://leetcode.com/problems/valid-anagram/" %}

### Problem

> Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.
>
> An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "anagram", t = "nagaram"
> <strong>Output:
> </strong> true</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "rat", t = "car"
> <strong>Output:
> </strong> false</code></pre>
>
> &#x20;
>
> **Constraints:**
>
> * `1 <= s.length, t.length <= 5 * 104`
> * `s` and `t` consist of lowercase English letters.
>
> &#x20;
>
> **Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

### Pseudocode

{% code overflow="wrap" %}
```
anagrams consist of words that is of the same length and also same amount of identical characters. the sequence or order of letters are not important.

generaly intuition is to make a map of one string containing key-value pair of {letter: sumOfLetter}
traverse the other string while conduting some bookeeping. 
return false if any letter is < 0
if the code reaches at the end of the loop, return true

or the shortcut method is to split both strings into array, sort according to alphabetical order and join them. then make a comparison if they are identical.
```
{% endcode %}

### Solution

```javascript
// Some code
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s = s.split("").sort().join();
  t = t.split("").sort().join();

  if (s === t) {
    return true;
  } else {
    return false;
  }
};

```

### Time and Space Complexity

#### Time

* While there is some extra computation to perform split(), sort(), join(), the overall running time for both methods are still O(N), as Big O notation measures the computation requirements of the code depending on the size of input. Both methods will linearly increase in running time with respect to input
* Total - O(N)

#### Space

* Same as above
* Total - O(N)
