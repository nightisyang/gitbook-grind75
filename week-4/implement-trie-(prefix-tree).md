# Implement Trie (Prefix Tree)

{% embed url="https://leetcode.com/problems/implement-trie-prefix-tree" %}

### Problem

> A [**trie**](https://en.wikipedia.org/wiki/Trie) (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
>
> Implement the Trie class:
>
> * `Trie()` Initializes the trie object.
> * `void insert(String word)` Inserts the string `word` into the trie.
> * `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
> * `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.
>
> &#x20;
>
> **Example 1:**
>
> <pre><code>Input
> ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
> [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
> <strong>Output
> </strong>[null, null, true, false, true, null, true]
> <strong>Explanation
> </strong>Trie trie = new Trie();
> trie.insert("apple");
> trie.search("apple");   // return True
> trie.search("app");     // return False
> trie.startsWith("app"); // return True
> trie.insert("app");
> trie.search("app");     // return True</code></pre>

### Pseudocode

```
- implement a trie, the trick is to remember that objects are passed as reference
    - create a variable node that serves like a pointer
    - keep advancing node to newest node while building trie
    - terminate with isTerminal = true
                                ***MAGIC***
                *** node = node[word[i]] = node[word[i]] || {} ***
```

### Solution

{% code overflow="wrap" %}
```javascript
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
// from solutions
// https://leetcode.com/problems/implement-trie-prefix-tree/solutions/58870/concise-javascript-solution/
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    // node is an object with a key word[i] and value word[i] or an empty object
    // ******* this works because objects in Javascript are passed as reference *******
    // reassigning node does not change the value of node, but moves node further into the nested array, think of it as moving node.next
    // {a: {} }
    // {a: {p: {}}} ==> node is now referencing the inner object node[p]
    // node = node[word[i]] = node[word[i]] || {}
    // also written as

    if (!node[word[i]]) {
      //key -----> value
      node[word[i]] = {};

      // reassigning node with the key node[word[i]] and value of an empty array
      node = node[word[i]];
    } else {
      //key -----> value
      node[word[i]] = node[word[i]];
      node = node[word[i]];
    }

    if (i === word.length - 1) {
      node.isTerminal = true;
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, isPrefix) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) return false;
    node = node[c];
  }
  return isPrefix || !!node.isTerminal;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.search(prefix, true);
};
```
{% endcode %}

### Time and Space Complexity

#### Time

* What did the code do
* Total -

#### Space

* What did the code do
* Total -
