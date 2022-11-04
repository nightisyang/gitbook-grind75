# First Bad Version

{% embed url="https://leetcode.com/problems/first-bad-version" %}

### Problem

> You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
>
> Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.
>
> You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: n = 5, bad = 4
> <strong>Output: 4
> </strong><strong>Explanation:
> </strong>call isBadVersion(3) -> false
> call isBadVersion(5) -> true
> call isBadVersion(4) -> true
> Then 4 is the first bad version.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: n = 1, bad = 1
> <strong>Output: 1</strong></code></pre>
>
>

### Pseudocode

<pre data-overflow="wrap"><code><strong>false -> false -> false -> false -> true -> true
</strong><strong>
</strong><strong>false = not faulty
</strong><strong>true = fauty
</strong><strong>
</strong><strong>the brute force/naive approach would be to go thorugh every version until the first true is returned.
</strong>
this can be optimized by using a binary search, with a target of true &#x26;&#x26; prev (i - 1) as false</code></pre>

### Solution

```javascript
  return function (n) {
    let firstBadVersion = null;
    let lo = 0;
    let hi = n;

    if (n === 1) {
      return n;
    }

    while (lo <= hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);

      if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        return mid;
      }

      if (isBadVersion(mid)) {
        hi = mid - 1;
      }

      if (!isBadVersion(mid)) {
        lo = mid + 1;
      }
    }
  
    return firstBadVersion;
  };
};


```

### Time and Space Complexity

#### Time

* Binary search has a running time of O(log n)
* Total - O(log n)

#### Space

* Assignment of variables are constant time, no other variables stored - O(1)
* Total - O(1)
