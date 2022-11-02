# Two Sums



{% embed url="https://leetcode.com/problems/two-sum/" %}

### Problem

> Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.
>
> You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.
>
> You can return the answer in any order.

### Pseudocode

```
- loop thorugh the array of integers
- find the complement of the current integer
    - complement = target - nums
    - store complement in a Map as a key, with index with value
        - [k, v] = [complement, i]
- if the current integer is found in the complement
    - return current index and index of complement
```

### Solution

```javascript
var twoSum = function (nums, target) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // find complement for nums[i]
    if (map.has(nums[i])) {
      result.push(i, map.get(nums[i]));
      return result;
    } else {
      map.set(complement, i);
    }
  }
};

```

### Time and Space Complexity

#### Time

* Loops through the array once - O(N)
* Map operations are constant time
* Total - O(N)

#### Space

* Stores complement of each element in a Map
  * Worst case scenario is that complement is in the last position of the array
* Total - O(N)

