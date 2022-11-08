# Find Median from Data Stream

{% embed url="https://leetcode.com/problems/find-median-from-data-stream" %}

### Problem

> The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
>
> * For example, for `arr = [2,3,4]`, the median is `3`.
> * For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.
>
> Implement the MedianFinder class:
>
> * `MedianFinder()` initializes the `MedianFinder` object.
> * `void addNum(int num)` adds the integer `num` from the data stream to the data structure.
> * `double findMedian()` returns the median of all elements so far. Answers within `10-5` of the actual answer will be accepted.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input:
> ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
> [[], [1], [2], [], [3], []]
>
> <strong>Output:
> </strong>[null, null, null, 1.5, null, 2.0]
>
> <strong>Explanation:
> </strong>MedianFinder medianFinder = new MedianFinder();
> medianFinder.addNum(1);    // arr = [1]
> medianFinder.addNum(2);    // arr = [1, 2]
> medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
> medianFinder.addNum(3);    // arr[1, 2, 3]
> medianFinder.findMedian(); // return 2.0</code></pre>

### Pseudocode

```
- initialize two heaps, min and max both heaps must have the same number of nodes
- median is the average of root of min heap and last node of max heap, or
- root of min heap if total number of elements are odd, no of elements min > max
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/find-median-from-data-stream/solutions/329657/javascript-max-heap-min-heap/
// explains how max and min heap is combined to find median
// https://leetcode.com/problems/find-median-from-data-stream/solutions/1330646/c-java-python-minheap-maxheap-solution-picture-explain-clean-concise/
var MedianFinder = function () {
  this.maxHeap = new Heap(Heap.maxComparator);
  this.minHeap = new Heap(Heap.minComparator);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  // balances the two heaps
  if (this.maxHeap.size - this.minHeap.size > 1) {
    // takes the lowest value in maxHeap and adds it in minHeap
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size - this.maxHeap.size > 1) {
    // reverse
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // to find a median, we have the following two scenarios:

  if (this.maxHeap.size > this.minHeap.size) {
    // 1. our max heap is greater than minheap
    // this means that we have an odd numbered list, so we get the "excess" number from our max heap, which corresponds to the median
    return this.maxHeap.peek();
  } else if (this.maxHeap.size < this.minHeap.size) {
    // 2 our min heap is greater than max heap
    // this means that we have an odd numbered list, so we get the "excess" number from our min heap, which corresponds to the median
    return this.minHeap.peek();
  } else {
    // 3. our list is of even numbers, therefore the size of our
    // heaps will be the same, and we can get their root values
    // and divide it by 2
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

/**
 *  custom Heap class
 */
class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];

    // decides on how comparison is made depending on min or max heap
    this.comparator = comparator || Heap.minComparator;
  }

  // how heap works, add at the bottom and bubbleUp to compare
  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  // poll takes the root value, min if minHeap, max if maxHeap out, then takes the end, puts it at the root and bubbleDown to place it in the right position
  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0,
      length = this.values.length;

    while (true) {
      let left = null,
        right = null,
        swap = null,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.values[index]))
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}

/**
 *  Min Comparator
 */
Heap.minComparator = (a, b) => {
  return a - b;
};

/**
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => {
  return b - a;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
