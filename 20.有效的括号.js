/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    // 建立一个栈
    let left = [];
    // 遍历字符串中的每一个字符
    for (let c of str) {
        // 如果是左括号，则入栈
        if (c == '(' || c == '{' || c == '[')
            left.push(c);
        else { // 字符 c 是右括号
            // 如果栈不为空，并且最近入栈的左括号可以匹配，则出栈
            if (left.length && leftOf(c) == left[left.length-1])
                left.pop();
            else
                // 和最近的左括号不匹配
                return false;
        }
    }
    // 是否所有的左括号都被匹配了
    return !left.length;
}

function leftOf(c) {
    if (c == '}') return '{';
    if (c == ')') return '(';
    return '[';
}
// @lc code=end

