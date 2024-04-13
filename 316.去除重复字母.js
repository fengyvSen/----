/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let res=[]
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(res.includes(element)){
            continue;
        }
        // 已经确保单调递增
        while (res.length>0&&res[res.length-1]>element&&s.indexOf(res[res.length-1],i)!==-1) {
            res.pop()
        }
        res.push(element)
    }
    return res.join("")
};

// @lc code=end
