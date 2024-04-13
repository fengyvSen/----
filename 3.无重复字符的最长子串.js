/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //建立滑动窗口
  const window = new Map();
  let right = 0;
  let left=0;
  let max = 0;
  while (right < s.length) {
    const r = s[right];
    //扩大窗口
    right++;

    console.log(`window: [${left}, ${right})`);

    // 思路错误，只考虑到了连续重复字符串的情况，如果出现错开的重复e.g."dvdf"，就不适用了

    //     //更新窗口数据
    //     if (window.has(r)) {
    //       max = max > window.size ? max : window.size;
    //       console.log(" clear");
    //       // 缩小窗口
    //       window.clear();
    //     }

    //     // 考虑没有具体落实在细节上，本次重复的也算新开始的字符串的left
    //     // }else{
    //     //     window.set(r,1)
    //     // }
    //     window.set(r, 1);
    //     console.log("   set "+r);

    //     // 发现只有一个字符串的时候就没有下一次了
    //     //更新窗口数据
    //     // if (window.size===s.length) {
    //     //   max = max > window.size ? max : window.size;
    //     //   // 缩小窗口
    //     //   window.clear();
    //     // }
    //   }
    //   max = max > window.size ? max : window.size;

    window.set(r, (window.get(r)||0)+1);

    // 惯性思维，此处只需要判断是否要收缩窗口，之前是看字符串长度
    // while (right<=s.length) {

    while(window.get(r)>1){
        let l=s[left];
        left++;
        window.set(l,window.get(l)-1);
    }
    // window.size会存在window.get(?)==0的情况,所以不等同于当前窗口的长度
    max=Math.max(right-left,max)
  }

  // 忘记返回了
  return max;
};
// @lc code=end
