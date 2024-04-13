/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = Math.max(...nums);
  let right = 0;
  nums.forEach((item) => (right += item));
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (getK(nums, mid) > k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
var getK = function (nums, max) {
  let result = 1;
  let temp = max;
  nums.forEach((item) => {
    // console.log("   "+item+" "+temp);
    if (temp - item >= 0) {
      temp = temp - item;
    } else {
      // console.log("\n");
      result++;
      temp = max - item;
    }
  });
  // console.log("result:"+result);
  return result;
};
// @lc code=end
