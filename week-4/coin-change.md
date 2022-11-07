# Coin Change

{% embed url="https://leetcode.com/problems/coin-change" %}

### Problem

> You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.
>
> Return _the fewest number of coins that you need to make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `-1`.
>
> You may assume that you have an infinite number of each kind of coin.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input: coins = [1,2,5], amount = 11
> <strong>Output: 3
> </strong><strong>Explanation: 11 = 5 + 5 + 1</strong></code></pre>
>
> **Example 2:**
>
> <pre><code>Input: coins = [2], amount = 3
> <strong>Output: -1</strong></code></pre>
>
> **Example 3:**
>
> <pre><code>Input: coins = [1], amount = 0
> <strong>Output: 0</strong></code></pre>

### Pseudocode

```
```

### Solution

```javascript
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    // console.log('looping through:', coin)
    for (let i = coin; i <= amount; i++) {
      // console.log(i, dp[i], dp[i - coin])
      // console.log('finding number of coins required to arrive at sum, interatively')
      // calculating number of coins required from 0 to amount.
      // we're currently at i = 2, coins[2] = 5, are there coins to make up 6, and is this value smaller than the current amount of coins?
      // add one coin to the number of coins that make up 6.
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  // console.log(dp)
  return dp[amount] === Infinity ? -1 : dp[amount];
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
