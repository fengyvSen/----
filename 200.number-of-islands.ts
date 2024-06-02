/*
 * @lc app=leetcode.cn id=200 lang=typescript
 * @lcpr version=30202
 *
 * [200] 岛屿数量
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numIslands(grid: string[][]): number {
  const path: number[][] = [];
  let res = 0;
  //把陆地变成海洋
  let traverse = (grid: string[][], i: number, j: number) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return;
    }
    if (grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    
    traverse(grid, i + 1, j);
    traverse(grid, i, j + 1);
    traverse(grid, i - 1, j);
    traverse(grid, i, j - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        traverse(grid, i, j);
        res++;
      }
    }
  }
  return res;
}
// @lc code=end

/*
[["1","0","1","1","0","1","1"]]
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */
