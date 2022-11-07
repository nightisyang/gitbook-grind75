# Linked List Cycle

{% embed url="https://leetcode.com/problems/linked-list-cycle" %}

### Problem

> Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
>
> There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.
>
> Return `true` _if there is a cycle in the linked list_. Otherwise, return `false`.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
>
> <pre data-overflow="wrap"><code>Input: head = [3,2,0,-4], pos = 1
> <strong>Output: true
> </strong><strong>Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist\_test2.png)
>
> <pre data-overflow="wrap"><code>Input: head = [1,2], pos = 0
> <strong>Output: true
> </strong><strong>Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.</strong></code></pre>
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist\_test3.png)
>
> <pre><code>Input: head = [1], pos = -1
> <strong>Output: false
> </strong><strong>Explanation: There is no cycle in the linked list.
> </strong><strong></strong></code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
traversing a cylical graph with a single pointer results in an infinite loop as there is not terminating null nodes.

if two pointers are used, with one of the pointer travelling twice as fast as the other, at some point these two pointers will meet.
```
{% endcode %}

### Solution

```javascript
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

```

### Time and Space Complexity

#### Time

* A while loop that terminates when there's a null node, or when fast = slow. Complete traversal of the linked list O(N)
* Total - O(N)

#### Space

* Memory requirements are constant as pointer assignments are constant time O(1)
* Total - O(1)
