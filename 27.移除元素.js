/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fast=0;
    let slow=-1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==val){
            slow++;
            nums[slow]=nums[fast];
        }
        fast++;
    }
    return slow+1;
};
// @lc code=end

