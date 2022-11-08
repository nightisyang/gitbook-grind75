# LRU Cache

{% embed url="https://leetcode.com/problems/lru-cache" %}

### Problem

> Design a data structure that follows the constraints of a [**Least Recently Used (LRU) cache**](https://en.wikipedia.org/wiki/Cache\_replacement\_policies#LRU).
>
> Implement the `LRUCache` class:
>
> * `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
> * `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
> * `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.
>
> The functions `get` and `put` must each run in `O(1)` average time complexity.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input:
> ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
> [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
>
> <strong>Output:
> </strong>[null, null, null, 1, null, -1, null, -1, 3, 4]
>
> <strong>Explanation:
> </strong>LRUCache lRUCache = new LRUCache(2);
> lRUCache.put(1, 1); // cache is {1=1}
> lRUCache.put(2, 2); // cache is {1=1, 2=2}
> lRUCache.get(1);    // return 1
> lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
> lRUCache.get(2);    // returns -1 (not found)
> lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
> lRUCache.get(1);    // return -1 (not found)
> lRUCache.get(3);    // return 3
> lRUCache.get(4);    // return 4</code></pre>

### Pseudocode

```
- implement LRU from scratch ala 
    - https://github.com/nightisyang/kata-machine/blob/main/src/day2/LRU.ts

- or use a combination of set and map,
    - leveraging on the properties of how elements are added in set
    - the first element is the last priority
    - delete and add key (as element) to push to back of Set, queue
```

### Solution

```javascript
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Set();
  this.obj = new Map();
};

LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  } else {
    this.cache.delete(key);
    this.cache.add(key);
  }
  return this.obj.get(key);
};

LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    this.cache.add(key);
  } else {
    this.cache.delete(key);
    this.cache.add(key);
  }
  if (this.cache.size > this.capacity) {
    let [first] = this.cache;
    this.obj.delete(first);
    this.cache.delete(first);
  }
  this.obj.set(key, value);
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
