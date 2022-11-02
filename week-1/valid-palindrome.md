# Valid Palindrome

{% embed url="https://leetcode.com/problems/valid-palindrome/" %}

### Problem

> A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
>
> Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: s = "A man, a plan, a canal: Panama"
> <strong>Output:
> </strong> true
> <strong>Explanation:
> </strong> "amanaplanacanalpanama" is a palindrome.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: s = "race a car"
> <strong>Output:
> </strong> false
> <strong>Explanation:
> </strong> "raceacar" is not a palindrome.</code></pre>
>
> **Example 3:**
>
> <pre><code>Input: s = " "
> <strong>Output:
> </strong> true
> <strong>Explanation:
> </strong> s is an empty string "" after removing non-alphanumeric characters.
> Since an empty string reads the same forward and backward, it is a palindrome.</code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
a valid palindrome is when the a str is a mirror image with the center letter/s as pivot.

- compare starting kth and ending kth letters
- need to clean up string to exclude whitespaces and other symbols and only include lowercase alphabets
- s.toLowerCase()
- use regular expression to replace everything that isn't numbers of alphabets to ""
- /[^0-9a-z]/g - explained in https://regexr.com/
```
{% endcode %}

### Solution

```javascript
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
```

### Time and Space Complexity

#### Time

* replace characters to lowercase - O(N)
* regular expression to remove non alphanumeric characters  - O(N)
* loop through start and end simultaneously to compare characters - O(N)
* Total - O(N)

#### Space

* store string after clean up - O(N)
* Total - O(N)
