/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let res=[]
    let count=new Array(26).fill(0);
    let visited=new Array(26).fill(false)
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        count[element.charCodeAt()-97]++;
    }
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const elementCode=element.charCodeAt()-97
        if(visited[elementCode]){
            count[elementCode]--;
            continue
        }
        while (res.length>0&&element<res[res.length-1]&&count[res[res.length-1].charCodeAt()-97]>=1) {
            visited[res[res.length-1].charCodeAt()-97]=false
            res.pop()
        }
        res.push(element)
        count[elementCode]--
        visited[elementCode]=true
    }
    return res.join('')
};
// @lc code=end

