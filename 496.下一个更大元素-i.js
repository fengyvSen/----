/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//     // 记录 nums2 中每个元素的下一个更大元素
//     var greater = nextGreater(nums2);
//     var greaterMap = new Map();
//     for (var i = 0; i < nums2.length; i++) {
//         greaterMap.set(nums2[i], greater[i]);
//     }
//     var res = new Array(nums1.length);
//     for (var i = 0; i < nums1.length; i++) {
//         res[i] = greaterMap.get(nums1[i]);
//     }
//     return res;
// };


// // 计算 nums 中每个元素的下一个更大元素
// var nextGreater = function(nums) {
//     var n = nums.length;
//     var res = new Array(n);
//     var s = [];
//     for (var i = n - 1; i >= 0; i--) {
//         // 判定个子高矮
//         while (s.length && s[s.length-1] <= nums[i]) {
//             s.pop(); //pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
//         }
//         res[i] = s.length == 0 ? -1 : s[s.length-1];
//         s.push(nums[i]);
//     }
//     return res;
// };

var nextGreaterElement = function(nums1, nums2) {
    const stack = [];   //记录比i高的元素
    const map=new Map() //记录栈对应num2的下一个元素的index

    for (let i = nums2.length-1; i >=0 ; i--) {
        const element=nums2[i]
        while (stack.length>0&&element>stack[stack.length-1]) {
            stack.pop()
        }
        map.set(element,stack.length>0?stack[stack.length-1]:-1)
        stack.push(element)
        
        // 我悟了！map放的是num2的下一个更大元素
        // map.set(element,i)
    }

    const result = new Array(nums1.length).fill(0).map((_,index)=>map.get(nums1[index]));
    return result

}
// @lc code=end

