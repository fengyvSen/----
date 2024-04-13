/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */


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
        if(j+1<this.diff.length){this.diff[j+1]-=val;}
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
}

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    // const nums = new Array(n);  
    // // FIXME:报错全NAN，提交
    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i];
    //     element=0
    // }

    // 使用fill代替for循环
    const nums = new Array(n).fill(0);
    const difference = new Difference(nums);   
    for (let i = 0; i < bookings.length; i++) {
        const element = bookings[i];
        // 航班表转成数组,索引要减一;对nums和bookings的关系没有构建起来
        // difference.increment(element[0],element[1],element[2]);
        difference.increment(element[0]-1,element[1]-1,element[2]);
    }
//    result接受到的是数组的地址
//    result=difference.result;

//  返回的是函数difference.result
    // return difference.result;
    return difference.result();

};
// @lc code=end

