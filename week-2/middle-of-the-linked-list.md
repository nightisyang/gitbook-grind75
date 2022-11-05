# Middle of the Linked List

{% embed url="https://leetcode.com/problems/middle-of-the-linked-list" %}

### Problem

> Given the `head` of a singly linked list, return _the middle node of the linked list_.
>
> If there are two middle nodes, return **the second middle** node.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)
>
> <pre data-overflow="wrap"><code>Input: head = [1,2,3,4,5]
> <strong>Output: [3,4,5]
> </strong><strong>Explanation: The middle node of the list is node 3.</strong></code></pre>
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)
>
> <pre data-overflow="wrap"><code>Input: head = [1,2,3,4,5,6]
> <strong>Output: [4,5,6]
> </strong><strong>Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.</strong></code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
traverse linked list and store each node in an array, return (length / 2) + 1 from array

fast and slow pointer
https://leetcode.com/problems/middle-of-the-linked-list/solutions/1651600/python-java-c-simple-solution-one-pass-beginner-friendly-detailed-explanation/
```
{% endcode %}

### Solution

```javascript
var middleNode = function(head) {
  let stack = []
  let cur = head

  while(cur) {
    stack.push(cur)
    cur = cur.next
  }

  let mid = Math.floor(stack.length / 2)

  return stack[mid]
}
```

### Time and Space Complexity

#### Time

* Iterate through the linked list to find the length, return the middle node
* Total - O(N)

#### Space

* Stores all the nodes in array - O(N)
* Total - O(N)
