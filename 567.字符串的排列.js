/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const need = new Map();
  const window = new Map();
  for (const i of s1) {
    need.set(i, (need.get(i) || 0) + 1);
  }
  let left = 0;
  // right是）
  let right = 0;
  let vaild = 0;
  while (right < s2.length) {
    const r = s2[right];
    // 扩大窗口
    right++;
    if (need.has(r)) {
      window.set(r, (window.get(r) || 0) + 1);
      if (window.get(r) === need.get(r)) {
        vaild++;
      }
    }
    console.log(`window: [${left}, ${right})`);
    while (right - left >= s1.length) {

        // 对vaild理解有误，vaild是指need的符合个数
      // if(vaild===s1.length){
      if (vaild === need.size) {
        return true;
      }
      let l = s2[left];
      left++;
      if (need.has(l)) {
        if (window.get(l) === need.get(l)) {
          vaild--;
        }
        window.set(l, window.get(l) - 1);
      }
    }
  }
  return false;
};
// @lc code=end
