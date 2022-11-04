# Flood Fill

{% embed url="https://leetcode.com/problems/flood-fill/" %}

### Problem

> An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.
>
> You are also given three integers `sr`, `sc`, and `color`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.
>
> To perform a **flood fill**, consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels connected **4-directionally** to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.
>
> Return _the modified image after performing the flood fill_.
>
> &#x20;
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)
>
> <pre><code>Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
> <strong>Output:
> </strong> [[2,2,2],[2,2,0],[2,0,1]]
> <strong>Explanation:
> </strong> From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
> Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.</code></pre>
>
> **Example 2:**
>
> <pre><code>Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
> <strong>Output:
> </strong> [[0,0,0],[0,0,0]]
> <strong>Explanation:
> </strong> The starting pixel is already colored 0, so no changes are made to the image.</code></pre>
>
>

### Pseudocode

```
starting from an initial point in the matrix
find neighbouring cells that are of value 1, if it isn't 1, then return/continue
if it is, then reassign value to color

to traverse matrix, either dfs or bfs

dfs - recurse over 4 directions
bfs - push cells with value 1 into queue and iterate over 4 directions

```

### Solution

```javascript
// Some code
var floodFill = function (image, sr, sc, color) {
  const targetColor = image[sr][sc];
  let mLength = image.length;
  let nLength = image[sr].length;

  function walk(imgArr, m, n) {
    // base condition
    if (m < 0 || n < 0 || m >= mLength || n >= nLength) {
      return;
    }

    if (imgArr[m][n] !== 1) {
      return;
    }

    if (imgArr[m][n] === targetColor) {
      imgArr[m][n] = color;
    } else {
      return;
    }

    // pre
    // recurse
    const walkLeft = walk(imgArr, m + 1, n);
    const walkDown = walk(imgArr, m, n + 1);
    const walkRight = walk(imgArr, m - 1, n);
    const walkUp = walk(imgArr, m, n - 1);
    // post

    return;
  }
  walk(image, sr, sc);

  return image;
};


```

### Time and Space Complexity

#### Time

* dfs - time complexity of recursion is O(M\*N)
* bfs - similar time complexity O(M\*N)
* Total - O(M\*N)

#### Space

* dfs - space requirement for recursive function is O(M\*N)
* bfs - space requirement for bfs queue is O(M + N) ? not every cell is pushed into queue
* Total -
