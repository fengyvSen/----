/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {

    // left的范围
    // let left=0
    let left=Math.max(...weights)
    let right=1

    weights.forEach((item)=>right+=item)
    while (left<right) {
        let mid=left+Math.floor((right-left)/2);
        // console.log(`(${left},${right}),mid:${mid}`);
        if(getNeedDay(weights,mid)>days){
            left=mid+1
        }else{
            right=mid
        }
    }
    return left
};
var getNeedDay=function(weights,maxWeight){

    // 对result的判断，理解

    let result=1;
    let temp=maxWeight;
    weights.forEach((item)=>{
        // console.log("   "+item+" "+temp);
        if(temp-item>=0){
            temp=temp-item
        }
        else{
            // console.log("\n");
            result++
            temp=maxWeight-item
        }
    })
    // console.log("result:"+result);
    return result
}
// @lc code=end

