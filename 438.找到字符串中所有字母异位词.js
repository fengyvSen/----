/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 建立窗口
  const window = new Map();
  const need = new Map();
  for (const i of p) {
    need.set(i, (need.get(i) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let vaild=0;
  let res=[]
  while (right < s.length) {
    const r=s[right];
    // 扩大窗口    
    right++;
    if(need.has(r)){
        window.set(r,(window.get(r)||0)+1);
        if(window.get(r)===need.get(r)){
            vaild++;
        }
    }

    console.log(`window: [${left}, ${right})`);

    // 理解有误，缩小窗口<如果字符串相等但不符合题目要求，要缩小窗口来满足要求>
    // while(right-left>p.length){
    while(right-left>=p.length){
        if(vaild===need.size){
            res.push(left);
            
            // 读题：找到 s 中**所有** p 的 异位词 的子串，返回这些子串的**起始索引**
            // return res;
        }
        const l=s[left]

        // 缩小窗口
        // left--;
        left++;

        //遗忘了要need中有才会处理数据
        if(need.has(l)){
            if(window.get(l)===need.get(l)){
                vaild--;
            }
            window.set(l,(window.get(l)-1)||0)
        }
    }
  }
  return res;
};
// @lc code=end
