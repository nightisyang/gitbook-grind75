# Reverse Linked List

{% embed url="https://leetcode.com/problems/reverse-linked-list" %}

### Problem

> Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)
>
> <pre><code>Input: head = [1,2,3,4,5]
> <strong>Output: [5,4,3,2,1]</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)
>
> <pre><code>Input: head = [1,2]
> <strong>Output: [2,1]</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: head = []
> <strong>Output: []</strong></code></pre>
>
>

### Pseudocode

{% code overflow="wrap" %}
```
initial intuition is to replace node.val but without an array it's not possible to retrieve the first node val when recursing the last value
instead, just extend the last node, node.next to previous e.g.
1 -> 2 -> 3 -> 4 -> 5
                     5 -> 4 -> 3 -> 2 -> 1 
new reverse node is returned at the end of each recursion, adding the prev value to node.next. remember that objects are passed by reference
```
{% endcode %}

### Solution

```javascript
var reverseList = function (head) {
  return walk(head, null);
};

function walk(node, prev) {
  if (!node) {
    return prev;
  }

  const extend = walk(node.next, node);

  node.next = prev;

  return extend;
}

```

### Time and Space Complexity

#### Time

* Linked list has to be traversed to the end and reassigned next to previous - O(N)
* Total - O(N)

#### Space

* A reverse linked list was returned - O(N)
* Total - O(N)
