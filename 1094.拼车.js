/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start


class Difference{
    /**
     * 
     * @param {Array<int>} nums 
     */
    constructor(nums){
        this.diff=new Array(nums.length);
        this.diff[0]=nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.diff[i]=nums[i]-nums[i-1];
        }
    }
    increment(i,j,val){
        this.diff[i]+=val;
        // 理解错误,应该是j+1是否在数组的末尾,在末尾的话补上this.diff[j+1]-=val
        // if(j<this.diff.length){this.diff[j+1]-=val;}
        if(j+1<this.diff.length){this.diff[j+1]-=val;
        }
    }
    // 理解有误,返回的是加减后的整个nums
    // result(i,j,val){
    //     let res=new Array(Math.abs(j-i+1));
    //     this.increment(i,j,val);
    //     if(i=0){
    //         res[i]=this.diff[i];
    //         i++;
    //     }
    //     for(let k=0;k<Math.abs(j-i+1);k++){
    //         res[i]=this.diff[i+k]+this.diff[i+k-1]
    //     }
    //     return res
    // }
    result() {
        let res = new Array(this.diff.length);
        res[0] = this.diff[0];
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i];
        }
        return res;
    }
    ifoverload(nums,capacity){
        let result=nums.some((element)=>{
            // console.log(element+"?"+capacity);
            // console.log(element>capacity);
            return element>capacity})
        return result;
    }
}

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
let carPooling = function(trips, capacity) {

    // 数组的最后一个item是trips[trips.length-1]
    // const nums = new Array(trips[trips.length][2]).filter(0);

    // 题目逻辑：没有说最后的就是最大的站
    // let nums = new Array(trips[trips.length-1][2]).fill(0);
    let nums = new Array(1001).fill(0);
    const df = new Difference(nums);

    // 题目逻辑：忘记了要下车
    // for (let i = 0; i < trips.length; i++) {
    //     const element = trips[i];

    //     // 给出数组和储存数组的对应关系
    //     // df.increment(element[1],element[2],element[0]);

    //     // console.log(element[1]-1);
    //     df.increment(element[1]-1,element[2]-1,element[0]);
    //     // df.show()
    // }

    // 题目逻辑：不是i+1就下车
    let result=trips.some((element,index)=>{
        // 题目阅读：fromi, toi是公里数，不是第几站
        df.increment(element[1],element[2]-1,element[0])
        return df.ifoverload(df.result(),capacity)
    })

    // 函数功能记忆模糊：some是直到返回真值
    // let result=df.result().some((index,element)=>{
    //     return element<=capacity})

    // 匿名函数用foreach会重置index
    // let ifoverload=df.result().some((index,element)=>{
    //     return element>capacity})
    // return !ifoverload;

    return !result;
};
// @lc code=end

