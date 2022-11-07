# Accounts Merge

{% embed url="https://leetcode.com/problems/accounts-merge" %}

### Problem

> Given a list of `accounts` where each element `accounts[i]` is a list of strings, where the first element `accounts[i][0]` is a name, and the rest of the elements are **emails** representing emails of the account.
>
> Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
>
> After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails **in sorted order**. The accounts themselves can be returned in **any order**.
>
> &#x20;
>
> **Example 1:**
>
> <pre data-overflow="wrap"><code>Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
> <strong>Output:
> </strong> [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
> <strong>Explanation:
> </strong>The first and second John's are the same person as they have the common email "johnsmith@mail.com".
> The third John and Mary are different people as none of their email addresses are used by other accounts.
> We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
> ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.</code></pre>
>
> **Example 2:**
>
> <pre data-overflow="wrap"><code>Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
> <strong>Output:
> </strong> [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]</code></pre>

### Pseudocode

```
```

### Solution

```javascript
// from solutions
// https://leetcode.com/problems/accounts-merge/solutions/494151/javascript-solution-dfs/
var accountsMerge = function (accounts) {
  const graph = {};
  const emailObj = {};

  // construct two maps
  // 1. Adjacency list, email: [ +all other email it's connected to]
  // 2. email: name, key-value pair, needed as reference when reconstructing the output array
  for (const email of accounts) {
    const name = email[0];
    const firstEmail = email[1];

    emailObj[firstEmail] = name;

    for (let i = 1; i < email.length; i++) {
      if (!graph[email[i]]) {
        graph[email[i]] = new Set();
      }

      emailObj[email[i]] = name;

      if (i !== 1) {
        graph[firstEmail].add(email[i]);
        graph[email[i]].add(firstEmail);
      }
    }
  }

  const res = [];
  const visited = new Set();

  // perform dfs to find all the connected email and push them into a single array
  // visited set to avoid being stuck in a loop
  function dfs(key) {
    visited.add(key);

    let emails = [key];

    // goes through the adjacency list to find other connections
    // if it hasn't been visited, push all dfs email into array and return it
    graph[key].forEach((val) => {
      if (!visited.has(val)) {
        // recurse here and compile emails, no duplications because of visited check
        emails.push(...dfs(val));
      }
    });

    return emails;
  }

  // call the first dfs here, and reconstruct to required output format
  for (const key in graph) {
    if (!visited.has(key)) {
      const temp = dfs(key);
      temp.sort();
      temp.unshift(emailObj[temp[0]]);
      res.push(temp);
    }
  }
  // console.log(graph);
  // console.log(emailObj);
  // console.log(visited);
  // console.log(res)
  return res;
};

```

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
