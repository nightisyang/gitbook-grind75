# Task Scheduler

{% embed url="https://leetcode.com/problems/task-scheduler" %}

### Problem

> Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
>
> However, there is a non-negative integer `n` that represents the cooldown period between two **same tasks** (the same letter in the array), that is that there must be at least `n` units of time between any two same tasks.
>
> Return _the least number of units of times that the CPU will take to finish all the given tasks_.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: tasks = ["A","A","A","B","B","B"], n = 2
> <strong>Output: 8
> </strong><strong>Explanation:
> </strong>A -> B -> idle -> A -> B -> idle -> A -> B
> There is at least 2 units of time between any two same tasks.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: tasks = ["A","A","A","B","B","B"], n = 0
> <strong>Output: 6
> </strong><strong>Explanation:
> </strong>On this case any permutation of size 6 would work since n = 0.
> ["A","A","A","B","B","B"]
> ["A","B","A","B","A","B"]
> ["B","B","B","A","A","A"]
> ...
> And so on.</code></pre>
>
> **Example 3:**
>
> <pre data-overflow="wrap"><code>Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
> <strong>Output: 16
> </strong><strong>Explanation:
> </strong>One possible solution is
> A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A</code></pre>

### Pseudocode

```
```

### Solution

```javascript

// this is what I was looking for
// https://leetcode.com/problems/task-scheduler/solutions/2260435/javascript-max-heap-hash-map-o-n-2-time-o-n-2-space/
var leastInterval = function (tasks, n) {
  let hashMap = new Map();
  for (let task of tasks) {
    hashMap.set(task, hashMap.get(task) + 1 || 1);
  }

  let maxHeap = new MaxHeap();
  for (let [key, value] of hashMap.entries()) {
    maxHeap.offer(value);
  }

  let queue = [];
  let time = 0;
  while (maxHeap.array.length || queue.length) {
    // console.log('queue:', queue, 'maxHeap:', maxHeap.array)
    let task = maxHeap.array.length ? maxHeap.poll() : null;

    if (task) {
      task--;
      time++;
      if (task !== 0) queue.push([task, time + n]);
    } else {
      time++;
    }

    if (queue.length && queue[0][1] <= time) {
      let temp = queue.shift();
      maxHeap.offer(temp[0]);
    }
  }

  return time;
};

class MaxHeap {
  constructor() {
    this.array = [];
  }

  offer(val) {
    this.array.push(val);
    this.bubbleUp(this.array.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.array[index] > this.array[parent]) {
        this.swap(index, parent);
      }
      index = parent;
    }
    return null;
  }

  poll() {
    this.swap(0, this.array.length - 1);
    let result = this.array.pop();
    this.bubbleDown(0);
    return result;
  }

  bubbleDown(parent) {
    while (true) {
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;
      if (
        (this.array[parent] < this.array[left] && !this.array[right]) ||
        this.array[left] > this.array[right]
      ) {
        this.swap(parent, left);
        parent = left;
      } else if (this.array[parent] < this.array[right]) {
        this.swap(parent, right);
        parent = right;
      } else {
        parent = left;
      }
      if (!this.array[parent]) break;
    }
    return null;
  }

  swap(index1, index2) {
    let temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
    return null;
  }
}

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
