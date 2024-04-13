/*
 * @lc app=leetcode.cn id=303 lang=java
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {

    private int[] perSum;

    /*
     * 初始化累加和数组
     */
    public NumArray(int[] nums) {
        perSum = new int[nums.length + 1];
        for (int i = 1; i < perSum.length; i++) {
            perSum[i] = perSum[i - 1] + nums[i - 1];
        }
    }

    // 返回累加结果
    public int sumRange(int left, int right) {
        // 想当然了，没有具体地考虑perSum每个索引里面的值是怎么样的
        // int result= left <=right?perSum[right]-perSum[left]:perSum[left]-perSum[right];
        int result = left <= right ? perSum[right+1] - perSum[left] : perSum[left+1] - perSum[right];
        return result;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
// @lc code=end
