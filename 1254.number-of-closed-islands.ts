/*
 * @lc app=leetcode.cn id=1254 lang=typescript
 * @lcpr version=30202
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function closedIsland(grid: number[][]): number {
    const row=grid[0].length;
    const column=grid.length;
    let res=0;
  //用遍历淹没岛屿
  let traverse = (i, j) => {
    if (i >= column || j >= row || i < 0 || j < 0) {
      return;
    }
    if (grid[i][j] === 1) {
      return;
    }
    grid[i][j] = 1;
    traverse(i - 1, j);
    traverse(i, j - 1);
    traverse(i + 1, j);
    traverse(i, j + 1);
  };
  //先把封闭岛屿淹了
  for (let i = 0; i < column; i++) {
    traverse(i, 0);
    traverse(i, row-1);
  }
  for(let j=0;j< row;j++){
    traverse(0,j)
    traverse(column-1,j)
  }
  //正常淹没剩下的岛屿
  for(let i=0;i<column;i++){
    for(let j=0;j<row;j++){
        if(grid[i][j]===0){
            traverse(i,j)
            res++
        }
    }
  }
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]\n
// @lcpr case=end

 */
