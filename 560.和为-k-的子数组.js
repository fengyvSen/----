/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// let subarraySum = function(nums, k) {
//     let result=0;
//     let preSum=new Array(nums.length+1);
//     preSum[0]=0;
//     for (let i = 1; i < preSum.length; i++) {
//         preSum[i]=preSum[i-1]+nums[i-1];
//     }
//     for (let i = 1; i < preSum.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if(preSum[i]-preSum[j]===k){
//                 result+=1;
//             }            
//         }
//     }
//     return result;
// };
let subarraySum = function(nums, k) {
    let result =0;
    let preSum=new Map();
    preSum.set(0,1);
    let preSumItem=0;
    for (let i = 0; i < nums.length; i++) {
        preSumItem+=nums[i];
        if(preSum.has(preSumItem-k)){
            result+=preSum.get(preSumItem-k);
        }
        preSum.set(preSumItem,(preSum.get(preSumItem)||0)+1);
    }
    return result;
}
// @lc code=end

