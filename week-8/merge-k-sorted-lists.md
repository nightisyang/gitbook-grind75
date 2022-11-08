# Merge k Sorted Lists

{% embed url="https://leetcode.com/problems/merge-k-sorted-lists" %}

### Problem

> You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
>
> _Merge all the linked-lists into one sorted linked-list and return it._
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: lists = [[1,4,5],[1,3,4],[2,6]]
> <strong>Output: [1,1,2,3,4,4,5,6]
> </strong><strong>Explanation:
> </strong> The linked-lists are:
> [
>   1->4->5,
>   1->3->4,
>   2->6
> ]
> merging them into one sorted list:
> 1->1->2->3->4->4->5->6</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: lists = []
> <strong>Output: []</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: lists = [[]]
> <strong>Output: []</strong></code></pre>

### Pseudocode

```
- initial attemp was to solve it by joining to a new linked list
    - looping through each list and merge, sorting to new list
- optimal solution is to push all the lists into a minHeap
    - construct a new linked list by polling minHeap for next min node
    - offering node.next back into minHeap
    
                    *** DON'T THINK OF LIST NODES AS VALUES ***
                            *** THINK OF IT AS A CHAIN ***
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/merge-k-sorted-lists/solutions/10617/javascript-o-n-log-k-time-and-o-k-space-using-min-heap/
class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || ((parent, child) => parent - child);
  }

  get size() {
    return this.data.length;
  }

  bubbleUp(c) {
    if (c === 0) return;
    const p = Math.floor((c + 1) / 2) - 1;
    if (this.comparator(this.data[p], this.data[c]) > 0) {
      [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
    }
    this.bubbleUp(p);
  }

  bubbleDown(p) {
    const c = 2 * (p + 1) - 1;
    if (c >= this.data.length) return;

    const leftDelta = this.comparator(this.data[p], this.data[c]);
    const rightDelta =
      c + 1 >= this.data.length
        ? 0
        : this.comparator(this.data[p], this.data[c + 1]);
    if (leftDelta <= 0 && rightDelta <= 0) return;

    const swapChildIndex = c + (leftDelta <= rightDelta);
    [this.data[p], this.data[swapChildIndex]] = [
      this.data[swapChildIndex],
      this.data[p],
    ];
    this.bubbleDown(swapChildIndex);
  }

  add(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    if (this.size < 2) {
      return this.data.pop();
    }

    // swap the first and last place - taking the min value, rebalance the tree
    [this.data[0], this.data[this.size - 1]] = [
      this.data[this.size - 1],
      this.data[0],
    ];
    const val = this.data.pop();
    this.bubbleDown(0);
    // returns the min linkedList node
    return val;
  }
}

var mergeKLists = function (lists) {
  if (!lists.length) return null;

  const minHeap = new Heap((parent, child) => parent.val - child.val);

  for (let node of lists) {
    // console.log(node)
    if (node) minHeap.add(node);
    // console.log(minHeap.data, minHeap.size)
  }

  const dummy = new ListNode();
  let tail = dummy;
  while (minHeap.size) {
    // console.log(minHeap.size)
    tail.next = minHeap.poll();
    // bring tail forward
    tail = tail.next;

    // if there's a following node, add that into the min heap
    if (tail.next) minHeap.add(tail.next);
  }

  return dummy.next;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
