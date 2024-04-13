/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const result=[];
    const stack = [];
    const max=Math.max(...nums);

    for (let i = nums.length*2-1; i >= 0; i--) {
        const element = nums[i%nums.length];
        while (stack.length>0&&element>=stack[stack.length-1]) {
            stack.pop()
        }
        console.log(stack);
        result[i%nums.length]=stack.length>0?stack[stack.length-1]:-1
        stack.push(element)
    }
    return result
};
// @lc code=end

