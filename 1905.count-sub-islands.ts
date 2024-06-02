/*
 * @lc app=leetcode.cn id=1905 lang=typescript
 * @lcpr version=30202
 *
 * [1905] 统计子岛屿
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countSubIslands(grid1: number[][], grid2: number[][]): number {
  let traverse = (grid:number[][],i: number, j: number) => {
    if(i<0||j<0||i>=grid.length||j>=grid[0].length){
        return;
    }
    if(grid[i][j]===0){
        return
    }
    grid[i][j]=0;
    traverse(grid,i-1,j);
    traverse(grid,i,j-1);
    traverse(grid,i+1,j);
    traverse(grid,i,j+1);
  };
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid1[i][j] === 0 && grid2[i][j] === 1) {
        // 这个判断可以淹没完不是子岛的，只要有一个不包含grid1包含就会被淹没
        traverse(grid2,i, j);
      }
    }
  }
  //计算子岛数目
  let result=0;
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] === 1) {
        result++;
        traverse(grid2,i, j);
      }
    }
  }
  return result;
}
// @lc code=end

/*
// @lcpr case=start
// [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]\n[[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]]\n[[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]\n
// @lcpr case=end

 */
