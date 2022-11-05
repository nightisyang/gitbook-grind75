# Longest Palindrome

{% embed url="https://leetcode.com/problems/longest-palindrome" %}

### Problem

> Given a string `s` which consists of lowercase or uppercase letters, return _the length of the **longest palindrome**_ that can be built with those letters.
>
> Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome here.
>
> &#x20;
>
> **Example 1:**
>
> <pre data-overflow="wrap"><code>Input: s = "abccccdd"
> <strong>Output: 7
> </strong><strong>Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.</strong></code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: s = "a"
> <strong>Output: 1
> </strong><strong>Explanation: The longest palindrome that can be built is "a", whose length is 1.</strong></code></pre>
>
>

### Pseudocode

{% code overflow="wrap" %}
```
// define what constitues a palindrom
// even length palindrome, all letters have even pairs
// odd length palindrome, one letter is odd 1, 3, 5.. the others must be even
// add letters from string into a map, to build longest palindrome, take all even numbered letters and add the longest odd letter if available 
// omit 1 character from odd length and it becomes even

```
{% endcode %}

### Solution

```javascript
var longestPalindrome = function(s) {

    const map = new Map()
    let evenSum = 0;
    let largestOdd = 0;
    let largestOddLetter = null;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }

    // first pass to add up all the even numbers and obtain largestOdd
    for(const [k, v] of map) {
        if(v % 2 === 0) {
            evenSum += v;
        } else {
            if(v > largestOdd) {
                largestOdd = v;
                largestOddLetter = k;
            } 
        }
    }

    // second pass to add up all the odd numbers - 1 as even excluding largestOdd
    for (const [k, v] of map) {
        if(v % 2 !== 0 && k !== largestOddLetter) {
            evenSum += v - 1;
        }
    }

    return (evenSum + largestOdd);
};


```

### Time and Space Complexity

#### Time

* performed 3 loops independently, first to map the letters, second to obtain sum of even numbers and largest odd, third loop to obtain sum of odd - 1 letters excluding largest odd. O(3N) -> O(N)
* Total - O(N)

#### Space

* stored map of string - O(N)
* Total - O(N)
