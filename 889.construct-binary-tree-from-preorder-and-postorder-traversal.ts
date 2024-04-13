/*
 * @lc app=leetcode.cn id=889 lang=typescript
 * @lcpr version=30121
 *
 * [889] 根据前序和后序遍历构造二叉树
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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if(preorder.length<=0){
        return null
    }
    const root = new TreeNode(preorder[0]);
    const leftSize=postorder.indexOf(preorder[1])+1
    root.left=constructFromPrePost(preorder.slice(1,1+leftSize),postorder.slice(0,leftSize))
    root.right=constructFromPrePost(preorder.slice(1+leftSize,preorder.length),postorder.slice(leftSize,postorder.length-1))
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1]\n
// @lcpr case=end

 */

