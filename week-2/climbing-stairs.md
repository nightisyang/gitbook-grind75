# Climbing Stairs

{% embed url="https://leetcode.com/problems/climbing-stairs" %}

### Problem

> You are climbing a staircase. It takes `n` steps to reach the top.
>
> Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: n = 2
> <strong>Output: 2
> </strong><strong>Explanation:
> </strong>There are two ways to climb to the top.
> 1. 1 step + 1 step
> 2. 2 steps</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: n = 3
> <strong>Output: 3
> </strong><strong>Explanation:
> </strong>There are three ways to climb to the top.
> 1. 1 step + 1 step + 1 step
> 2. 1 step + 2 steps
> 3. 2 steps + 1 step
> </code></pre>

### Pseudocode

{% code overflow="wrap" %}
```
establish some relationship with each increase in step, find a general pattern

n = 4
1. 1 step + 1 step + 1 step + 1 step     ...(3 steps)
2. 1 step + 2 steps + 1 step             ...(3 steps)
3. 2 steps + 1 step + 1 step             ...(3 steps)
4. 1 step + 1 step + 2 steps             ...(2 steps)
5. 2 steps + 2 steps                     ...(2 steps)

to get to 4 steps 
    - increase the number of ways to get to 3 steps + 1 step to 4 steps
    - increase the number of ways to get to 2 steps + 2 steps to 4 steps

ways(n) = ways(n - 1) + ways(n - 2)

for other dp solutions see:
https://leetcode.com/problems/climbing-stairs/solutions/1792723/python-in-depth-walkthrough-explanation-dp-top-down-bottom-up/?orderBy=most_votes

```
{% endcode %}

### Solution

```javascript
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  let a = [1, 2];

  for (let i = 3; i <= n; i++) {
    console.log(a);
    a = [a[1], a[0] + a[1]];
  }

  return a[1];
};

```

### Time and Space Complexity

#### Time

* loops over from 3 to n - O(N), summation assignment O(1)
* Total - O(N)

#### Space

* assignment to 2 element array in every loop - O(1) always two elements, doesn't expand with input
* Total - O(1)
