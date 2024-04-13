/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result=""
    for (let i = 0; i < s.length; i++) {
        let palindromeOdd=palindrome(s,i,i);
        let palindromeEven=palindrome(s,i,i+1);
        result=palindromeOdd.length>result.length?palindromeOdd:result
        result=palindromeEven.length>result.length?palindromeEven:result
    }
    return result
};
let palindrome=function(s,left,right){
    // left=0时也是没有越界的
    // while(left>0&&right<s.length&&s[left]===s[right]){
    while(left>=0&&right<s.length&&s[left]===s[right]){
        left--;
        right++;
    }
    return s.substring(left + 1, right)
}
// @lc code=end

