/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
  /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    let n=nums1.length
    // 排序
    let temp1=new Array(n).fill(0);
    let temp2=new Array(n).fill(0);
    let result=new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        temp1[i]=i;
        temp2[i]=i;        
    }
    temp1.sort((i,j)=>nums1[temp1[i]]-nums1[temp1[j]])
    temp2.sort((i,j)=>nums2[temp2[i]]-nums2[temp2[j]])

    // 根据排序判断
    let right=n-1;
    let left=0;

    // 理解错题意，应该是返回对应原数组序列的
    // for(let i=n-1;i>=0;i--){
    //     if (temp2[i]>temp1[left]) {
    //         result[i]=temp1[left];
    //         left++
    //     }else{
    //         result[i]=temp1[right]
    //         right--
    //     }
    // }
    for(let i=n-1;i>=0;i--){
        console.log(temp2[i]);
        if (nums2[temp2[i]]>=nums1[temp1[right]]) {
            result[temp2[i]]=nums1[temp1[left]];
            left++
        }else{
            result[temp2[i]]=nums1[temp1[right]]
            right--
        }
    }
    return result
};

// @lc code=end

