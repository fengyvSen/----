/*
 * @lc app=leetcode.cn id=654 lang=typescript
 * @lcpr version=30121
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if(!nums||nums.length<=0)return null
    const root = new TreeNode(Math.max(...nums));
    let maxIndex=nums.indexOf(root.val);
    root.left=constructMaximumBinaryTree(nums.slice(0,maxIndex));
    root.right=constructMaximumBinaryTree(nums.slice(maxIndex+1,nums.length));
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,1,6,0,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

 */

