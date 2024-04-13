/*
 * @lc app=leetcode.cn id=114 lang=typescript
 * @lcpr version=30121
 *
 * [114] 二叉树展开为链表
 */


// @lcpr-template-start

// @lcpr-template-end
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    flattenTemp(root)
};
function flattenTemp(root: TreeNode | null,): TreeNode{
    if(root===null)return null
    let left=root.left
    let right=root.right
    flattenTemp(left)
    flattenTemp(right)
    root.left=null
    root.right=left
    let p=root
    while(p.right!==null){
        p=p.right
    }
    p.right=right
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

