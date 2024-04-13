/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * 答案
 */
// var minEatingSpeed = function(piles, H) {
//     let left = 1;
//     let right = 1000000000 + 1;

//     while (left < right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (f(piles, mid) <= H) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// };

// // 速度为 x 时，需要 f(x) 小时吃完所有香蕉
// var f = function(piles, x) {
//     let hours = 0;
//     for (let i = 0; i < piles.length; i++) {
//         hours += Math.floor(piles[i] / x);
//         if (piles[i] % x > 0) {
//             hours++;
//         }
//     }
//     return hours;
// };

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=0

    // piles不是按顺序的
    // let right =piles[piles.length-1]+1
    // 扩展字符的应用
    let right=Math.max(...piles)+1

    while(left<right ){
        // console.log(`(${left},${right})` )
        let mid=left+Math.floor((right-left)/2)
        if (getEatingTime(piles,mid )<=h){
            right =mid 
        }else if(getEatingTime(piles,mid)>h){
            left=mid+1
        }
    }
    return right
};
var getEatingTime=function(piles,k){
    let result=0
    piles.forEach((item)=>{

        // 循环导至超时
        // while(item>0){
        //     result++
        //     item-=k
        // }
        result+=Math.ceil(item / k)

    })
    console.log(result)
    return result
}

// @lc code=end
