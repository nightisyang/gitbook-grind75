# Best Time to Buy and Sell Stock

{% embed url="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" %}

### Problem

> You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
>
> You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.
>
> Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.
>
> **Example 1:**
>
> <pre data-overflow="wrap"><code>Input: prices = [7,1,5,3,6,4]
> <strong>Output: 5
> </strong><strong>Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.</strong></code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: prices = [7,6,4,3,1]
> <strong>Output:0
> </strong><strong>Explanation: In this case, no transactions are done and the max profit = 0.</strong></code></pre>

### Pseudocode

{% code overflow="wrap" %}
```markdown
the most profitable strategy is to, buy at the lowest price and sell at the highest price.

- loop through array and
    - find lowest price
    ~- find highest price that is after index of lower price~
    - find the highest profit
```
{% endcode %}

### Solution

```javascript
var maxProfit = function (prices) {
  let lowestVal = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestVal) {
      lowestVal = prices[i];
    } else if (maxProfit < prices[i] - lowestVal) {
      maxProfit = prices[i] - lowestVal;
    }
  }

  return maxProfit;
};
```

### Time and Space Complexity

#### Time

* Loop through the array once O(N)
* Total - O(N)

#### Space

* Storing lowest price and max profit O(1)
* Total - O(1)
