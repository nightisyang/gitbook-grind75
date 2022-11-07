# Add Binary

{% embed url="https://leetcode.com/problems/add-binary" %}

### Problem

> Given two binary strings `a` and `b`, return _their sum as a binary string_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: a = "11", b = "1"
> <strong>Output: "100"</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: a = "1010", b = "1011"
> <strong>Output: "10101"</strong></code></pre>
>
>

### Pseudocode

```
- parseIns(string), start summing up from the end
    - if > 2, bring forward + 1
    - two main conditions, if bring forward is 1 or 0
        - if bringforward 0
            - 1 + 1 = 0, bringforward++
            - etc etc
        - if bringforward 1
            - 1 + 0 = 1, bringforward++
            - 1 + 1 = 1, bringforward++
```

### Solution

```javascript
var addBinary = function (a, b) {
  const arr = [];
  const longestArr = a.length > b.length ? a.length : b.length;
  const aEnd = a.length - 1;
  const bEnd = b.length - 1;
  let bringForward = 0;

  for (let i = 0; i < longestArr; i++) {
    const aVal = a[aEnd - i] ? Number(a[aEnd - i]) : 0;
    const bVal = b[bEnd - i] ? Number(b[bEnd - i]) : 0;
    const sum = (aVal + bVal).toString();
    addBringForward(sum);
    // alternatively,
    // const sum = (aVal + bVal);
    // bringForward = sum ? > 1 ? 1 : 0;
    // arr.push(sum % 2);
  }

  function addBringForward(x) {
    if (bringForward === 0) {
      if (x === "2") {
        arr.push("0");
        bringForward = 1;
      } else {
        arr.push(x);
      }
    } else {
      if (x === "0") {
        bringForward = 0;
        arr.push("1");
      } else if (x === "1") {
        bringForward = 1;
        arr.push("0");
      } else if (x === "2") {
        bringForward = 1;
        arr.push("1");
      }
    }
  }

  if (bringForward > 0) {
    arr.push(bringForward.toString());
  }

  return arr.reverse().join("");
};


```

### Time and Space Complexity

#### Time

* Loop through array once to sum up numbers - O(N)
* Other oprations are constant time O(1)
* Total - O(N)

#### Space

* Storing output as array before joining as string - O(N)
* Total - O(N)
