# Merge Two Sorted Lists

{% embed url="https://leetcode.com/problems/merge-two-sorted-lists/" %}

### Problem

> You are given the heads of two sorted linked lists `list1` and `list2`.
>
> Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.
>
> Return _the head of the merged linked list_.

### Pseudocode

```
- traverse both lists simutaneously using a while loop
- create a new LL, linking it a copy of the list with smallest value
    - advance BOTH 
        - linked list with the smaller value
        - new LL
    - if either one of the LL is null, attach the non-null LL to the new LL
    - while loop terminates when both LLs are null
- return new LL.next

Input: list1 = [1,2,4], list2 = [1,3,4]
[0]
[0,1,3,4]
[0,1,1,2,4]
[0,1,1,2,4]
[0,1,1,2,3,4]
[0,1,1,2,3,4]
[0,1,1,2,3,4,4]

return result.next
[1,1,2,3,4,4]]
```

### Solution

```javascript
const mergeTwoLists = (l1, l2) => {
  const result = new ListNode(null);
  let n = result;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      n.next = l2;
      l2 = l2.next;
    } else if (l2 === null) {
      n.next = l1;
      l1 = l1.next;
    } else if (l1.val < l2.val) {
      n.next = l1;
      l1 = l1.next;
    } else {
      n.next = l2;
      l2 = l2.next;
    }
    n = n.next;
  }

  return result.next;
};
```

### Time and Space Complexity

#### Time

* traversing the longest sorted linked list - O(N)
* assigning node.next to new list - O(1)
* Total - O(N)



#### Space

* creating a new sorted linked list, sum of both input - O(N)
* Total - O(N)

