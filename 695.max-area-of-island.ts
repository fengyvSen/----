/*
 * @lc app=leetcode.cn id=695 lang=typescript
 * @lcpr version=30202
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
//   当没有陆地的时候会-Infinity let result: number[] = [];
  let result: number=0;
  let flood = (i: number, j: number): number => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return 0;
    if (grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    return (
      1 + flood(i - 1, j) + flood(i, j + 1) + flood(i + 1, j) + flood(i, j - 1)
    );
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        result=Math.max(result,flood(i, j));
      }
    }
  }
  return result;
}
// @lc code=end

/*
// @lcpr case=start
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0,0,0,0,0,0]]\n
// @lcpr case=end

 */
