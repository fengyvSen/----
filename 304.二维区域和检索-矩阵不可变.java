/*
 * @lc app=leetcode.cn id=304 lang=java
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
    // int[][] preSum; 
    private int[][] preSum; 
    public NumMatrix(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        if (m == 0 || n == 0) return;
        // 构造前缀和矩阵
        preSum = new int[m + 1][n + 1];
                // preSum[0][0]=0;

        // for (int i = 1; i < preSum.length; i++) {
        //     for (int j = 1; j < preSum.length; j++) {
        //         preSum[i][j]=matrix[i][j]+preSum[i-1][j]+preSum[i][j-1]-preSum[i-1][j-1];
        //     }
        // }
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                preSum[i][j]=matrix[i-1][j-1]+preSum[i-1][j]+preSum[i][j-1]-preSum[i-1][j-1];
            }
        }
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        // int result=preSum[row2][col2]+preSum[row1][col1]-preSum[row1][col2]-preSum[row2][col1];
                int result=preSum[row2+1][col2+1]+preSum[row1][col1]-preSum[row1][col2+1]-preSum[row2+1][col1];
        return result;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */
// @lc code=end

