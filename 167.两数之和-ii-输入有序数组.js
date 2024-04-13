/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left=0,right=numbers.length-1;
    let result=new Array(2)
    while(left<right){
        let sum=numbers[left]+numbers[right];
        if(sum==target){
            result[0]=left+1
            result[1]=right+1
            return result;
        }else if(sum<target){
            left++;
        }else if(sum>target){
            right--;
        }
    }
    result[0]=-1
    result[1]=-1
    console.log(result);
    return result
};
// @lc code=end

