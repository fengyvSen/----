/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {

//     class MonotonicQueue {
//         constructor() {
//             this.q = []
//         }
        
//         push(n) {
//             // 将小于 n 的元素全部删除
//             while (this.q.length !== 0 && this.q[this.q.length - 1] < n) {

 
//                 this.q.pop()
//             }
//             // 然后将 n 加入尾部
//             this.q.push(n)
//         }

//         max() {
//             return this.q[0]
//         }

//         pop(n) {
//             if (this.q[0] === n) {
//                 this.q.shift()
//             }
//         }
//     }

//     const window = new MonotonicQueue()
//     const res = []

//     for (let i = 0; i < nums.length; i++) {
//         if (i < k - 1) {
//             //先填满窗口的前 k - 1
//             window.push(nums[i])
//         } else {


//             // 窗口向前滑动，加入新数字
//             window.push(nums[i])
//             // 记录当前窗口的最大值
//             res.push(window.max())
//             // 移出旧数字
//             window.pop(nums[i - k + 1])
//         }
//     }
//     return res
// }

var maxSlidingWindow = function(nums, k) {
    let right=0+k-1;

    const result=[];
    const window=[];

    // 如何解决window里存放的数知否超出范围：存放index
    // window.push(Math.max(...(nums.slice(left,right+1))));

    for (let i = 0; i < k; i++) {
        while(window.length>0&&nums[window[window.length-1]]<nums[i]){
            window.pop();
        }
        window.push(i)
    }

    for (; right < nums.length; right++) {
        const element = nums[right];
        while(window.length>0&&nums[window[window.length-1]]<element){
            window.pop();
        }
        window.push(right)
        while (window[0]<=right-k) {
            window.shift();
        }
        result.push(nums[window[0]])
    }

    return result
}
// @lc code=end

