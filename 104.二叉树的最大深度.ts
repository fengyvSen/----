/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//每次返回目前最深的深度(分解问题)
// function maxDepth(root: TreeNode | null): number {
//     if(root===null)return 0;
//     const  left=maxDepth(root.left)+1
//     const right = maxDepth(root.right)+1
//     return Math.max(left,right)
// };

let result=0
let depth=0
//到最深的节点再判断(遍历二叉树)
function maxDepth(root: TreeNode | null): number {
    result=0
    traverse(root)
    return result
};
 function traverse(root: TreeNode | null){
    if(root===null){
        result=Math.max(result,depth)
        return 
    };
    depth++
    traverse(root.left)
    traverse(root.right)
    depth--
 }

// @lc code=end

